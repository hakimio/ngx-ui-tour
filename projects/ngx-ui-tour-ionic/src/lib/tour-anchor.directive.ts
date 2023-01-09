import {Directive, ElementRef, HostBinding, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {TourAnchorDirective} from 'ngx-ui-tour-core';
import {IonTourService} from './ion-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';
import {IonStepOption} from './step-option.interface';
import {firstValueFrom} from 'rxjs';

@Directive({
    selector: '[tourAnchor]',
    standalone: true
})
export class TourAnchorIonPopoverDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    public tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    public isActive: boolean;

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

        this.isActive = true;
        templateComponent.step = step;
        popover.alignment = step.placement?.alignment;
        popover.side = step.placement?.side ?? 'bottom';

        const event = {
            target: this.element.nativeElement
        } as MouseEvent;

        await popover.present(event);
    }

    hideTourStep() {
        this.isActive = false;
        const popover = this.stepTemplateService.templateComponent.ionPopover;

        popover.dismiss();
    }

}
