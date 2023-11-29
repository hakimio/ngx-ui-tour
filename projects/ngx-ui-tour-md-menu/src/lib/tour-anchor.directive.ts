import type {OnDestroy, OnInit} from '@angular/core';
import {Directive, ElementRef, HostBinding, Input, ViewContainerRef} from '@angular/core';
import {TourAnchorDirective, TourState} from 'ngx-ui-tour-core';
import {first, Subscription} from 'rxjs';

import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';
import {TourStepTemplateService} from './tour-step-template.service';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {IMdStepOption} from './step-option.interface';
import {MatMenu, MatMenuPanel} from '@angular/material/menu';
import {FlexibleConnectedPositionStrategy, HorizontalConnectionPos, VerticalConnectionPos} from '@angular/cdk/overlay';

interface CustomMenuTrigger {
    _element: ElementRef<HTMLElement>;
    _parentMaterialMenu: MatMenu;
    _setPosition: (menu: MatMenuPanel, positionStrategy: FlexibleConnectedPositionStrategy) => void
}

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

        const trigger = this.opener.trigger,
            customTrigger = trigger as unknown as CustomMenuTrigger;
        customTrigger._element = this.element;
        // Fixes tour step closing when hovering over mat-menu item, issue #123
        customTrigger._parentMaterialMenu = null;
        // Overrides position setting to support opening to the sides
        customTrigger._setPosition = (menu, positionStrategy) => this.setPosition(menu, positionStrategy, step);

        const menu = this.tourStepTemplate.templateComponent.tourStep;
        trigger.menu = menu;
        menu.xPosition = step.placement?.xPosition || 'after';
        menu.yPosition = step.placement?.yPosition || 'below';
        menu.hasBackdrop = !!step.closeOnOutsideClick;

        const popoverClass = step.popoverClass ?? '',
            arrow = step.showArrow ? 'arrow' : '',
            horizontal = step.placement?.horizontal ? 'horizontal' : '';

        menu.panelClass = `tour-step ${popoverClass} ${arrow} ${horizontal}`;
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

    private setPosition(menu: MatMenuPanel, positionStrategy: FlexibleConnectedPositionStrategy, step: IMdStepOption) {
        let [originX, originFallbackX]: HorizontalConnectionPos[] =
            menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];

        const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =
            menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];

        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        const isHorizontal = step.placement?.horizontal;

        if (isHorizontal) {
            overlayFallbackX = originX = menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
        } else if (!menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }

        const offset = step.backdropConfig?.offset ?? 0,
            offsetX = isHorizontal ? offset : -offset,
            offsetY = isHorizontal ? -offset : offset;

        const original = {originX, originY, overlayX, overlayY, offsetX, offsetY};
        const flipX = {
            originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY,
            offsetX: -offsetX, offsetY
        };
        const flipY = {
            originX, originY: originFallbackY, overlayX, overlayY: overlayFallbackY, offsetX, offsetY: -offsetY
        };
        const flipXY = {
            originX: originFallbackX, originY: originFallbackY, overlayX: overlayFallbackX, overlayY: overlayFallbackY,
            offsetX: -offsetX, offsetY: -offsetY
        };

        positionStrategy.withPositions(isHorizontal ? [original, flipX] : [original, flipY, flipXY]);
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
