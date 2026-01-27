import {Directive, ElementRef, inject, type OnDestroy, type OnInit, signal, input} from '@angular/core';
import type {Placement} from '@ng-bootstrap/ng-bootstrap';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import type {TourAnchorDirective} from 'ngx-ui-tour-core';

import {NgbTourService} from './ng-bootstrap-tour.service';
import type {INgbStepOption} from './step-option.interface';
import {TourStepTemplateService} from './tour-step-template.service';
import {firstValueFrom} from 'rxjs';
import type {Options} from '@popperjs/core';


@Directive({
    selector: '[tourAnchor]',
    hostDirectives: [NgbPopover],
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorNgBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {

    public readonly tourAnchor = input<string>();

    public isActive = signal(false);
    public readonly element = inject(ElementRef);
    private readonly tourService = inject(NgbTourService);
    private readonly tourStepTemplate = inject(TourStepTemplateService);
    private popoverDirective = inject(NgbPopover, {host: true});

    constructor() {
        this.popoverDirective.autoClose = false;
        this.popoverDirective.triggers = '';
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.popoverDirective.toggle = () => {};
    }

    public ngOnInit(): void {
        this.tourService.register(this.tourAnchor(), this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor());
    }

    // noinspection JSUnusedGlobalSymbols
    public async showTourStep(step: INgbStepOption) {
        if (this.popoverDirective.isOpen()) {
            await firstValueFrom(this.popoverDirective.hidden);
        }

        this.isActive.set(true);
        this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
        if (step.useLegacyTitle) {
            this.popoverDirective.popoverTitle = step.title;
        }
        this.popoverDirective.container = 'body';

        const popoverClass = step.popoverClass ?? '';
        this.popoverDirective.popoverClass = `tour-step ${popoverClass}`;
        this.popoverDirective.placement = (step.placement || 'auto')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top') as Placement;

        const offset = step.backdropConfig?.offset;

        if (offset) {
            this.popoverDirective.popperOptions = options => this.setOffsetModifier(options, offset);
        }
        this.popoverDirective.positionTarget = this.element.nativeElement;

        this.popoverDirective.open({step});
    }

    private setOffsetModifier(options: Partial<Options>, offset: number): Partial<Options> {
        const offsetModifier = options.modifiers
                ?.find(modifier => modifier.name === 'offset' && modifier.options),
            arrowHeight = 10;

        if (offsetModifier) {
            offsetModifier.options['offset'] = [0, offset + arrowHeight];
        }

        return options;
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive.set(false);
        this.popoverDirective.close();
    }

}
