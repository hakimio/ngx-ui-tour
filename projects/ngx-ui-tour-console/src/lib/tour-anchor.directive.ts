import {IStepOption, TourAnchorDirective, TourService} from 'ngx-ui-tour-core';
import {Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';

@Directive({
    selector: '[tourAnchor]',
    standalone: true
})
export class TourAnchorConsoleDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input() public tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    public isActive = false;

    constructor(
        private readonly tourService: TourService,
        public readonly element: ElementRef
    ) {
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

        console.group(step.title);
        console.log(step.content);
        console.log(`Anchor id: ${this.tourAnchor}`);
        console.groupEnd();
    }

    // noinspection JSUnusedGlobalSymbols
    public hideTourStep(): void {
        this.isActive = false;
    }
}
