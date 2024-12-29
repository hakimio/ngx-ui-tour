import {
    Directive,
    ElementRef,
    inject,
    Input,
    type OnDestroy,
    type OnInit,
    signal,
    ViewContainerRef
} from '@angular/core';
import type {TourAnchorDirective} from 'ngx-ui-tour-core';
import {TourTuiHintService} from './tour-tui-hint.service';
import type {ITuiHintStepOption} from './step-option.interface';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorTuiHintDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    tourAnchor: string;

    isActive = signal(false);

    private opener: TourAnchorOpenerComponent;
    public readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly tourService = inject(TourTuiHintService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);
    private readonly viewContainer = inject(ViewContainerRef);

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
        this.isActive.set(true);

        if (!this.opener) {
            this.createOpener();
        }

        const tuiHint = this.opener.hint;

        (tuiHint as unknown as {el: HTMLElement}).el = this.element.nativeElement;

        this.opener.isShown.set(true);
    }

    // noinspection JSUnusedGlobalSymbols
    hideTourStep() {
        this.isActive.set(false);
        this.opener.isShown.set(false);
    }

}
