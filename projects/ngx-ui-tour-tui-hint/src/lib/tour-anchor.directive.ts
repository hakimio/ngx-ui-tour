import {Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {TuiManualHintDirective} from '@taiga-ui/core';
import {ScrollingUtil, TourAnchorDirective, TourBackdropService, TourState} from 'ngx-ui-tour-core';
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

    constructor(
        private readonly tourService: TourTuiHintService,
        private readonly tourBackdropService: TourBackdropService,
        private readonly tourStepTemplateService: TourStepTemplateService,
        private readonly tuiHint: TuiManualHintDirective,
        public element: ElementRef
    ) {}

    ngOnInit(): void {
        this.tourService.register(this.tourAnchor, this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor);
    }

    showTourStep(step: ITuiHintStepOption) {
        const htmlElement: HTMLElement = this.element.nativeElement,
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
            this.tourBackdropService.show(this.element);
        } else {
            this.tourBackdropService.close();
        }

        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';

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
