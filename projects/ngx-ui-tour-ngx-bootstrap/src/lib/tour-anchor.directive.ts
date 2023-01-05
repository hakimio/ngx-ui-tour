import {Directive, ElementRef, Host, HostBinding, Input} from '@angular/core';
import type {OnDestroy, OnInit} from '@angular/core';
import {PopoverDirective} from 'ngx-bootstrap/popover';
import {TourAnchorDirective} from 'ngx-ui-tour-core';
import {INgxbStepOption as IStepOption} from './step-option.interface';

import {NgxbTourService} from './ngx-bootstrap-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';

@Directive({
    selector: '[tourAnchor]',
    standalone: true
})
export class TourAnchorNgxBootstrapPopoverDirective extends PopoverDirective {}

@Directive({
    selector: '[tourAnchor]',
    standalone: true
})
export class TourAnchorNgxBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input() public tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    public isActive: boolean;

    constructor(
        private tourService: NgxbTourService,
        private tourStepTemplate: TourStepTemplateService,
        public element: ElementRef,
        @Host()
        private popoverDirective: TourAnchorNgxBootstrapPopoverDirective
    ) {
        this.popoverDirective.triggers = '';
    }

    public ngOnInit(): void {
        this.tourService.register(this.tourAnchor, this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor);
    }

    // noinspection JSUnusedGlobalSymbols
    public showTourStep(step: IStepOption): void {
        this.isActive = true;
        this.popoverDirective.popover = this.tourStepTemplate.template;
        this.popoverDirective.popoverContext = {step};
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.containerClass = 'ngx-bootstrap';
        if (step.containerClass) {
            this.popoverDirective.containerClass += ` ${step.containerClass}`;
        }
        this.popoverDirective.placement = step.placement || 'auto';
        this.popoverDirective.show();
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive = false;
        this.popoverDirective.hide();
    }
}
