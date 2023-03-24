import type {OnDestroy, OnInit} from '@angular/core';
import {Directive, ElementRef, Host, HostBinding, Input} from '@angular/core';
import {NgbPopover, Placement} from '@ng-bootstrap/ng-bootstrap';
import {TourAnchorDirective} from 'ngx-ui-tour-core';

import {NgbTourService} from './ng-bootstrap-tour.service';
import {INgbStepOption} from './step-option.interface';
import {TourStepTemplateService} from './tour-step-template.service';
import {firstValueFrom} from 'rxjs';
import {Options} from '@popperjs/core'


@Directive({
    selector: '[tourAnchor]',
    standalone: true,
    hostDirectives: [NgbPopover]
})
export class TourAnchorNgBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    public tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    public isActive: boolean;

    constructor(
        private tourService: NgbTourService,
        private tourStepTemplate: TourStepTemplateService,
        public element: ElementRef,
        @Host()
        private popoverDirective: NgbPopover
    ) {
        this.popoverDirective.autoClose = false;
        this.popoverDirective.triggers = '';
        this.popoverDirective.toggle = () => {};
    }

    public ngOnInit(): void {
        this.tourService.register(this.tourAnchor, this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor);
    }

    // noinspection JSUnusedGlobalSymbols
    public async showTourStep(step: INgbStepOption) {
        if (this.popoverDirective.isOpen()) {
            await firstValueFrom(this.popoverDirective.hidden);
        }

        this.isActive = true;
        this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        if (step.popoverClass) {
            this.popoverDirective.popoverClass = step.popoverClass;
        }
        this.popoverDirective.placement = <Placement>(step.placement || 'auto')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top');
        this.popoverDirective.popperOptions = config => ({
            ...config,
            strategy: step.disablePageScrolling ? 'fixed' : 'absolute'
        });

        const offset = step?.backdropConfig?.offset
        if (offset) {
            this.popoverDirective.popperOptions = (options: Options) => {
                const offsetModifier = options.modifiers?.find(m => m.name === 'offset' && m.options),
                  arrowWidth = 10

                if (offsetModifier) {
                    offsetModifier.options.offset = [0, offset + arrowWidth]
                }

                return options
            }
        }

        this.popoverDirective.open({step});
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive = false;
        this.popoverDirective.close();
    }

}
