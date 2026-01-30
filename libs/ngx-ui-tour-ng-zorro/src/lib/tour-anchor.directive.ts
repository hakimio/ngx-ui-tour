import {
    Directive,
    ElementRef,
    inject,
    input,
    type OnDestroy,
    type OnInit,
    signal,
    ViewContainerRef
} from '@angular/core';
import {type TourAnchorDirective, TourState} from 'ngx-ui-tour-core';
import {NgZorroTourService} from './ng-zorro-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';
import type {NgZorroStepOption} from './step-option.interface';
import {filter, first, type Subscription} from 'rxjs';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorNgZorroDirective implements OnInit, OnDestroy, TourAnchorDirective {

    public readonly tourAnchor = input.required<string>();

    public isActive = signal(false);

    public readonly element = inject(ElementRef);
    private readonly tourService = inject(NgZorroTourService);
    private readonly stepTemplateService = inject(TourStepTemplateService);
    private readonly viewContainerRef = inject(ViewContainerRef);

    private popoverCloseSubscription?: Subscription;
    private opener: TourAnchorOpenerComponent;

    ngOnInit() {
        this.tourService.register(this.tourAnchor(), this);
    }

    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor());
    }

    async showTourStep(step: NgZorroStepOption) {
        const templateComponent = this.stepTemplateService.templateComponent;

        this.isActive.set(true);
        templateComponent.step = step;

        if (!this.opener) {
            this.createOpener();
        }

        const popover = this.opener.popover(),
            popoverClass = step.popoverClass ?? '';

        popover.origin = this.element;
        popover.overlayClassName = `tour-step ${popoverClass}`;

        const stepDimensions = step.stepDimensions;

        popover.overlayStyle = {
            width: stepDimensions?.width,
            minWidth: stepDimensions?.minWidth,
            maxWidth: stepDimensions?.maxWidth
        };

        popover.placement = (step.placement || 'bottomLeft') satisfies NgZorroStepOption['placement'];
        popover.overlayClickable = !!step.closeOnOutsideClick;

        this.opener.isShown.set(true);

        if (this.popoverCloseSubscription) {
            this.popoverCloseSubscription.unsubscribe();
            this.popoverCloseSubscription = null;
        }
        this.popoverCloseSubscription = popover.visibleChange
            .pipe(
                filter(isVisible => !isVisible),
                first()
            )
            .subscribe(
                () => {
                    if (this.tourService.getStatus() !== TourState.OFF) {
                        this.tourService.end();
                    }
                }
            );
    }

    hideTourStep() {
        this.isActive.set(false);
        if (this.popoverCloseSubscription) {
            this.popoverCloseSubscription.unsubscribe();
            this.popoverCloseSubscription = null;
        }

        this.opener.isShown.set(false);
    }

    private createOpener() {
        this.opener = this.viewContainerRef.createComponent(TourAnchorOpenerComponent).instance;
    }

}
