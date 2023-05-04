import type {OnDestroy, OnInit} from '@angular/core';
import {Directive, ElementRef, HostBinding, Input, ViewContainerRef} from '@angular/core';
import {TourAnchorDirective, TourState} from 'ngx-ui-tour-core';
import {first, Subscription} from 'rxjs';

import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';
import {TourStepTemplateService} from './tour-step-template.service';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {IMdStepOption} from './step-option.interface';

@Directive({
    selector: '[tourAnchor]',
    standalone: true
})
export class TourAnchorMatMenuDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    public tourAnchor: string;

    public opener: TourAnchorOpenerComponent;
    public menuCloseSubscription: Subscription;

    @HostBinding('class.touranchor--is-active') public isActive: boolean;

    constructor(
        private viewContainer: ViewContainerRef,
        public element: ElementRef,
        private tourService: NgxmTourService,
        private tourStepTemplate: TourStepTemplateService
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
    showTourStep(step: IMdStepOption): void {
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;

        if (!this.opener) {
            this.createOpener();
        }

        const trigger = this.opener.trigger;
        (trigger as any)._element = this.element;
        // Fixes tour step closing when hovering over mat-menu item, issue #123
        (trigger as any)._parentMaterialMenu = null;

        const menu = this.tourStepTemplate.templateComponent.tourStep;
        trigger.menu = menu;
        menu.xPosition = step.placement?.xPosition || 'after';
        menu.yPosition = step.placement?.yPosition || 'below';
        menu.hasBackdrop = !!step.closeOnOutsideClick;
        if (step.popoverClass) {
            menu.panelClass = `tour-step ${step.popoverClass}`;
        }
        this.opener.markForCheck();
        trigger.openMenu();

        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = trigger.menuClosed
            .pipe(first())
            .subscribe(() => {
                if (this.tourService.getStatus() !== TourState.OFF) {
                    this.tourService.end();
                }
            });
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive = false;
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.opener.trigger.closeMenu();
    }

}
