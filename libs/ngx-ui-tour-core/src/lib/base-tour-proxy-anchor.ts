import {afterNextRender, AfterRenderPhase, Directive, ElementRef, inject} from '@angular/core';
import type {TourAnchorDirective} from './tour-anchor.directive';
import {DOCUMENT} from '@angular/common';

@Directive()
export abstract class BaseTourProxyAnchor {

    protected abstract readonly anchorDirective: TourAnchorDirective;
    private readonly document = inject(DOCUMENT);

    public abstract anchorEl: string | HTMLElement;

    constructor() {
        afterNextRender(
            () => this.setAnchorElement(), {
                phase: AfterRenderPhase.Read
            }
        );
    }

    private setAnchorElement(): void {
        if (this.anchorEl instanceof HTMLElement) {
            this.anchorDirective.element = new ElementRef<HTMLElement>(this.anchorEl);
            return;
        }
        const htmlElement = this.document.querySelector<HTMLElement>(this.anchorEl);

        if (!htmlElement) {
            throw new Error(`Element with "${this.anchorEl}" CSS selector could not be found!`);
        }

        this.anchorDirective.element = new ElementRef<HTMLElement>(htmlElement);
    }

}
