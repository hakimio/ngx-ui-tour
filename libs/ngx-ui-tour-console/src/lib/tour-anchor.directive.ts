import type {IStepOption, TourAnchorDirective} from 'ngx-ui-tour-core';
import {TourService} from 'ngx-ui-tour-core';
import {Directive, ElementRef, inject, type OnDestroy, type OnInit, signal, input} from '@angular/core';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorConsoleDirective implements OnInit, OnDestroy, TourAnchorDirective {

    public readonly tourAnchor = input<string>();

    public isActive = signal(false);
    public readonly element = inject(ElementRef);
    private readonly tourService = inject(TourService);

    public ngOnInit(): void {
        this.tourService.register(this.tourAnchor(), this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor());
    }

    // noinspection JSUnusedGlobalSymbols
    public showTourStep(step: IStepOption): void {
        this.isActive.set(true);

        console.group(step.title);
        console.log(step.content);
        console.log(`Anchor id: ${this.tourAnchor()}`);
        console.groupEnd();
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive.set(false);
    }
}
