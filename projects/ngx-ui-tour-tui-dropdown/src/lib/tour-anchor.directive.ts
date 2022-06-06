import {Directive, ElementRef, forwardRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import {GoToNextOnAnchorUtil, ScrollingUtil, TourAnchorDirective, TourBackdropService, TourState} from 'ngx-ui-tour-core';
import {ITuiDdStepOption} from './step-option.interface';
import {TourTuiDropdownService} from './tour-tui-dropdown.service';
import {TourStepTemplateService} from './tour-step-template.service';
import {TUI_DROPDOWN_DIRECTIVE, TuiDropdownDirective} from '@taiga-ui/core';
import {TuiParentsScrollService} from '@taiga-ui/cdk';

@Directive({
    selector: '[tourAnchor]',
    providers: [
        TuiDropdownDirective,
        TuiParentsScrollService,
        {
            provide: TUI_DROPDOWN_DIRECTIVE,
            useExisting: forwardRef(() => TuiDropdownDirective)
        }
    ]
})
export class TourAnchorTuiDropdownDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    isActive: boolean;

    private renderer: Renderer2;

    constructor(
        private readonly tourService: TourTuiDropdownService,
        private readonly tourBackdropService: TourBackdropService,
        private readonly tourStepTemplateService: TourStepTemplateService,
        private readonly tuiDropdown: TuiDropdownDirective,
        private elementRef: ElementRef,
        private rendererFactory: RendererFactory2
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    ngOnInit(): void {
        this.tourService.register(this.tourAnchor, this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor);
        GoToNextOnAnchorUtil.unregister(this.tourAnchor);
    }

    showTourStep(step: ITuiDdStepOption) {
        const htmlElement: HTMLElement = this.elementRef.nativeElement,
            templateComponent = this.tourStepTemplateService.templateComponent;

        templateComponent.step = step;
        this.isActive = true;

        if (!step.disableScrollToAnchor) {
            ScrollingUtil.ensureVisible(htmlElement);
        }

        if (step.placement?.horizontalDirection)
            this.tuiDropdown.align = step.placement.horizontalDirection;
        if (step.placement?.verticalDirection)
            this.tuiDropdown.direction = step.placement.verticalDirection;
        this.tuiDropdown.limitMinWidth = 'auto';
        this.tuiDropdown.minHeight = 170;
        this.tuiDropdown.content = templateComponent.template;

        if (step.enableBackdrop) {
            this.tourBackdropService.show(this.elementRef);
        } else {
            this.tourBackdropService.close();
        }

        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';

        GoToNextOnAnchorUtil.register(htmlElement,step, this.tourService, this.renderer, this.tourAnchor);

        this.tuiDropdown.open = true;
    }

    hideTourStep() {
        this.isActive = false;
        this.tuiDropdown.open = false;

        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdropService.close();
        }
    }

}
