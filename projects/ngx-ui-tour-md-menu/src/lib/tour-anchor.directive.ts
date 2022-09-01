import type {OnDestroy, OnInit} from '@angular/core';
import {Directive, ElementRef, HostBinding, Injector, Input, ViewContainerRef} from '@angular/core';
import {TourAnchorDirective, TourBackdropService, TourState} from 'ngx-ui-tour-core';
import {Subscription} from 'rxjs';

import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';
import {TourStepTemplateService} from './tour-step-template.service';
import {first} from 'rxjs/operators';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {IMdStepOption} from './step-option.interface';

@Directive({
    selector: '[tourAnchor]'
})
export class TourAnchorMatMenuDirective
    implements OnInit, OnDestroy, TourAnchorDirective {
    @Input() public tourAnchor: string;
    public opener: TourAnchorOpenerComponent;
    public menuCloseSubscription: Subscription;

    @HostBinding('class.touranchor--is-active') public isActive: boolean;

    constructor(
        private injector: Injector,
        private viewContainer: ViewContainerRef,
        public element: ElementRef,
        private tourService: NgxmTourService,
        private tourStepTemplate: TourStepTemplateService,
        private tourBackdrop: TourBackdropService
    ) {
    }

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
    showTourStep(step: IMdStepOption): void {
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;

        if (!this.opener) {
            this.createOpener();
        }

        const trigger = this.opener.trigger;
        (trigger as any)._element = this.element;

        const menu = this.tourStepTemplate.templateComponent.tourStep;
        trigger.menu = menu;
        menu.xPosition = step.placement?.xPosition || 'after';
        menu.yPosition = step.placement?.yPosition || 'below';
        menu.hasBackdrop = !!step.closeOnOutsideClick;
        this.opener.markForCheck();
        trigger.openMenu();

        if (step.enableBackdrop) {
            this.tourBackdrop.show(this.element, !step.disablePageScrolling);
        } else {
            this.tourBackdrop.close();
        }

        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = trigger.menuClosed
            .pipe(first())
            .subscribe(() => {
                if (this.tourService.getStatus() !== TourState.OFF) {
                    this.tourService.end();
                }
                this.tourBackdrop.close();
            });
    }

    public hideTourStep(): void {
        this.isActive = false;
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.opener.trigger.closeMenu();
        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdrop.close();
        }
    }
}
