import {Directive, ElementRef, inject, Input, type OnDestroy, type OnInit, signal} from '@angular/core';
import {PopoverDirective} from 'ngx-bootstrap/popover';
import type {TourAnchorDirective} from 'ngx-ui-tour-core';
import type {INgxbStepOption as IStepOption} from './step-option.interface';

import {NgxbTourService} from './ngx-bootstrap-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';

@Directive({
    selector: '[tourAnchor]'
})
export class TourAnchorNgxBootstrapPopoverDirective extends PopoverDirective {}

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorNgxBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input() public tourAnchor: string;

    public isActive = signal(false);
    public readonly element = inject(ElementRef);
    private readonly tourService = inject(NgxbTourService);
    private readonly tourStepTemplate = inject(TourStepTemplateService);
    private readonly popoverDirective = inject(TourAnchorNgxBootstrapPopoverDirective, {host: true});

    constructor() {
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
        this.isActive.set(true);
        this.popoverDirective.popover = this.tourStepTemplate.template;
        this.popoverDirective.popoverContext = {step};
        if (step.useLegacyTitle) {
            this.popoverDirective.popoverTitle = step.title;
        }
        this.popoverDirective.container = 'body';
        const popoverClass = step.popoverClass ?? '';
        this.popoverDirective.containerClass = `tour-step ${popoverClass}`;
        this.popoverDirective.placement = step.placement || 'auto';
        this.popoverDirective.show();
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive.set(false);
        this.popoverDirective.hide();
    }

}
