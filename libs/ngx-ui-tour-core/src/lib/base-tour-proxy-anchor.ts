import {afterNextRender, Directive, ElementRef, inject, DOCUMENT, type InputSignal} from '@angular/core';
import type {TourAnchorDirective} from './tour-anchor.directive';


@Directive()
export abstract class BaseTourProxyAnchor {

    protected abstract readonly anchorDirective: TourAnchorDirective;
    private readonly document = inject(DOCUMENT);

    public abstract anchorEl: InputSignal<string | HTMLElement>;

    constructor() {
        afterNextRender({
            read: () => this.setAnchorElement()
        });
    }

    private setAnchorElement(): void {
        const anchorEl = this.anchorEl();

        if (anchorEl instanceof HTMLElement) {
            this.anchorDirective.element = new ElementRef<HTMLElement>(anchorEl);
            return;
        }
        const htmlElement = this.document.querySelector<HTMLElement>(anchorEl);

        if (!htmlElement) {
            throw new Error(`Element with "${anchorEl}" CSS selector could not be found!`);
        }

        this.anchorDirective.element = new ElementRef<HTMLElement>(htmlElement);
    }

}
