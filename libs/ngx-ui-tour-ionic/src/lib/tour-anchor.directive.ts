import {Directive, ElementRef, inject, Input, type OnDestroy, type OnInit, signal} from '@angular/core';
import type {TourAnchorDirective} from 'ngx-ui-tour-core';
import {IonTourService} from './ion-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';
import type {IonStepOption} from './step-option.interface';
import {firstValueFrom} from 'rxjs';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorIonPopoverDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    public tourAnchor: string;

    public isActive = signal(false);

    public readonly element = inject(ElementRef);
    private readonly tourService = inject(IonTourService);
    private readonly stepTemplateService = inject(TourStepTemplateService);

    ngOnInit() {
        this.tourService.register(this.tourAnchor, this);
    }

    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }

    async showTourStep(step: IonStepOption) {
        const templateComponent = this.stepTemplateService.templateComponent,
            popover = templateComponent.ionPopover;

        if (popover.isCmpOpen) {
            await firstValueFrom(popover.didDismiss);
        }

        this.isActive.set(true);
        templateComponent.step = step;
        popover.alignment = step.placement?.alignment;
        popover.side = step.placement?.side ?? 'bottom';
        popover.cssClass = step.popoverClass;

        const event = {
            target: this.element.nativeElement
        } as MouseEvent;

        await popover.present(event);
    }

    hideTourStep() {
        this.isActive.set(false);
        const popover = this.stepTemplateService.templateComponent.ionPopover;

        popover.dismiss();
    }

}
