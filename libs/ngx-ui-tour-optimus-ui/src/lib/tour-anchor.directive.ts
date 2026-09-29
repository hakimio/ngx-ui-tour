import {
    Directive,
    ElementRef,
    inject,
    input,
    type OnDestroy,
    type OnInit,
    signal
} from '@angular/core';
import {TourStepTemplateService} from './tour-step-template.service';
import {OptimusUiTourService} from './optimus-ui-tour.service';
import type {OptimusUiStepOption} from './step-option.interface';
import {TourState, type TourAnchorDirective} from 'ngx-ui-tour-core';
import {first, firstValueFrom, type Subscription} from 'rxjs';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorOptimusUiDirective implements OnInit, OnDestroy, TourAnchorDirective {

    public readonly tourAnchor = input.required<string>();

    public isActive = signal(false);

    public readonly element = inject(ElementRef);
    private readonly tourService = inject(OptimusUiTourService);
    private readonly stepTemplateService = inject(TourStepTemplateService);
    private popoverCloseSubscription?: Subscription;

    ngOnInit() {
        this.tourService.register(this.tourAnchor(), this);
    }

    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor());
    }

    async showTourStep(step: OptimusUiStepOption) {
        const templateComponent = this.stepTemplateService.templateComponent,
            popover = templateComponent.popover();

        this.isActive.set(true);
        templateComponent.step = step;

        const popoverClass = step.popoverClass ?? '';
        popover.styleClass = `tour-step ${popoverClass}`;

        const event = {
            target: this.element.nativeElement
        } as MouseEvent;

        popover.dismissable = !!step.closeOnOutsideClick;
        popover.show(event);

        if (this.popoverCloseSubscription) {
            this.popoverCloseSubscription.unsubscribe();
        }
        this.popoverCloseSubscription = popover.onHide
            .pipe(first())
            .subscribe(() => {
                if (this.tourService.getStatus() !== TourState.OFF) {
                    this.tourService.end();
                }
            });
    }

    async hideTourStep() {
        this.isActive.set(false);
        this.popoverCloseSubscription?.unsubscribe();

        const popover = this.stepTemplateService.templateComponent.popover();
        if (!popover.overlayVisible) {
            return;
        }

        const hidden = firstValueFrom(popover.onHide.pipe(first()));
        popover.hide();
        await hidden;
    }

}
