import {Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {TourAnchorDirective} from 'ngx-ui-tour-core';
import {TourTuiHintService} from './tour-tui-hint.service';
import {ITuiHintStepOption} from './step-option.interface';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@Directive({
    selector: '[tourAnchor]',
    standalone: true
})
export class TourAnchorTuiHintDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    isActive: boolean;

    private opener: TourAnchorOpenerComponent;

    constructor(
        private readonly tourService: TourTuiHintService,
        private readonly tourStepTemplateService: TourStepTemplateService,
        private readonly viewContainer: ViewContainerRef,
        public readonly element: ElementRef
    ) {}

    ngOnInit(): void {
        this.tourService.register(this.tourAnchor, this);
    }

    ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor);
    }

    private createOpener() {
        this.opener = this.viewContainer.createComponent(TourAnchorOpenerComponent).instance;
    }

    // noinspection JSUnusedGlobalSymbols
    showTourStep(step: ITuiHintStepOption) {
        const templateComponent = this.tourStepTemplateService.templateComponent;

        templateComponent.step = step;
        this.isActive = true;

        if (!this.opener) {
            this.createOpener();
        }

        const tuiHint = this.opener.hint;

        (tuiHint as unknown as {el: ElementRef<HTMLElement>}).el = this.element;

        this.opener.isShown = true;
    }

    // noinspection JSUnusedGlobalSymbols
    hideTourStep() {
        this.isActive = false;
        this.opener.isShown = false;
    }

}
