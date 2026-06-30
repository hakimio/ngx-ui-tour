import {
    Directive,
    ElementRef,
    inject,
    input,
    type OnDestroy,
    type OnInit,
    type OutputRefSubscription,
    signal
} from '@angular/core';
import {type TourAnchorDirective, TourState} from 'ngx-ui-tour-core';
import {TourStepTemplateService} from './tour-step-template.service';
import {PrimeNgTourService} from './prime-ng-tour.service';
import type {PrimeNgStepOption} from './step-option.interface';
import type {Popover} from 'primeng/popover';
import {outputEmitterToPromise, setSignalInput} from './utils';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorPrimeNgDirective implements OnInit, OnDestroy, TourAnchorDirective {

    public readonly tourAnchor = input.required<string>();

    public isActive = signal(false);

    public readonly element = inject(ElementRef);
    private readonly tourService = inject(PrimeNgTourService);
    private readonly stepTemplateService = inject(TourStepTemplateService);
    private popoverCloseSubscription?: OutputRefSubscription;

    ngOnInit() {
        this.tourService.register(this.tourAnchor(), this);
    }

    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor());
    }

    async showTourStep(step: PrimeNgStepOption) {
        const templateComponent = this.stepTemplateService.templateComponent,
            popover = templateComponent.popover();

        if ((popover as Popover & {itemsWrapper: unknown | null}).itemsWrapper) {
            await outputEmitterToPromise(popover.onHide);
        }

        this.isActive.set(true);
        templateComponent.step = step;

        const popoverClass = step.popoverClass ?? '';
        setSignalInput(popover.styleClass, `tour-step ${popoverClass}`);

        const event = {
            target: this.element.nativeElement
        } as MouseEvent;

        setSignalInput(popover.dismissable, !!step.closeOnOutsideClick);
        popover.show(event);

        if (this.popoverCloseSubscription) {
            this.popoverCloseSubscription.unsubscribe();
        }

        this.popoverCloseSubscription = popover.onHide
            .subscribe(() => {
                if (this.tourService.getStatus() !== TourState.OFF) {
                    this.popoverCloseSubscription.unsubscribe();
                    this.tourService.end();
                }
            });
    }

    hideTourStep() {
        this.isActive.set(false);
        if (this.popoverCloseSubscription) {
            this.popoverCloseSubscription.unsubscribe();
        }

        const popover = this.stepTemplateService.templateComponent.popover();
        popover.hide();
    }

}
