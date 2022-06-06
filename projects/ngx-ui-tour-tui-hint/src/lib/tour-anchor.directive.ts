import {Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import {TuiManualHintDirective} from '@taiga-ui/core';
import {GoToNextOnAnchorUtil, ScrollingUtil, TourAnchorDirective, TourBackdropService, TourState} from 'ngx-ui-tour-core';
import {TourTuiHintService} from './tour-tui-hint.service';
import {ITuiHintStepOption} from './step-option.interface';
import {TourStepTemplateService} from './tour-step-template.service';

@Directive({
    selector: '[tourAnchor]',
    providers: [
        TuiManualHintDirective
    ]
})
export class TourAnchorTuiHintDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    isActive: boolean;

    private renderer: Renderer2;

    constructor(
        private readonly tourService: TourTuiHintService,
        private readonly tourBackdropService: TourBackdropService,
        private readonly tourStepTemplateService: TourStepTemplateService,
        private readonly tuiHint: TuiManualHintDirective,
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

    showTourStep(step: ITuiHintStepOption) {
        const htmlElement: HTMLElement = this.elementRef.nativeElement,
            templateComponent = this.tourStepTemplateService.templateComponent;

        templateComponent.step = step;
        this.isActive = true;

        if (!step.disableScrollToAnchor) {
            ScrollingUtil.ensureVisible(htmlElement);
        }

        this.tuiHint.direction = step.placement || 'bottom-right';
        this.tuiHint.content = templateComponent.template;
        this.tuiHint.mode = 'onDark';

        if (step.enableBackdrop) {
            this.tourBackdropService.show(this.elementRef);
        } else {
            this.tourBackdropService.close();
        }

        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';

        GoToNextOnAnchorUtil.register(htmlElement,step, this.tourService, this.renderer, this.tourAnchor);

        this.tuiHint.tuiManualHintShow = true;
    }

    hideTourStep() {
        this.isActive = false;
        this.tuiHint.tuiManualHintShow = false;

        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdropService.close();
        }
    }

}
