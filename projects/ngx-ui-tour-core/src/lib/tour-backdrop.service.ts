import {ElementRef, Injectable, RendererFactory2} from '@angular/core';
import type {Renderer2} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounce} from 'rxjs/operators';
import {ScrollingUtil} from './scrolling-util';

@Injectable()
export class TourBackdropService {
    private renderer: Renderer2;
    private backdropElements: HTMLElement[];
    private targetHtmlElement: HTMLElement;
    private isScrollingEnabled: boolean;
    windowResizeSubscription$: Subscription;

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    public show(targetElement: ElementRef, isScrollingEnabled = true) {
        this.isScrollingEnabled = isScrollingEnabled;
        this.targetHtmlElement = targetElement.nativeElement;

        if (!this.backdropElements) {
            this.createBackdrop();
            this.subscribeToWindowResizeEvent();
        }
    }

    private createBackdrop() {
        const elementBoundingRect = this.targetHtmlElement.getBoundingClientRect(),
            documentBoundingRect = document.documentElement.getBoundingClientRect(),
            scrollX = window.scrollX ?? window.pageXOffset,
            scrollY = window.scrollY ?? window.pageYOffset;

        if (!this.backdropElements) {
            this.backdropElements = this.createBackdropElements();
        }

        // leftBackdropElement
        this.applyStyles(this.createBackdropStyle({
            width: elementBoundingRect.left + scrollX,
            height: documentBoundingRect.height,
            top: 0,
            left: 0
        }), this.backdropElements[0]);
        // topBackdropElement
        this.applyStyles(this.createBackdropStyle({
            width: elementBoundingRect.width,
            height: elementBoundingRect.top + scrollY,
            top: 0,
            left: elementBoundingRect.left + scrollX
        }), this.backdropElements[1]);
        // bottomBackdropElement
        this.applyStyles(this.createBackdropStyle({
            width: elementBoundingRect.width,
            height: documentBoundingRect.height - (elementBoundingRect.top + scrollY) - elementBoundingRect.height,
            top: elementBoundingRect.top + scrollY + elementBoundingRect.height,
            left: elementBoundingRect.left + scrollX
        }), this.backdropElements[2]);
        //rightBackdropElement
        this.applyStyles(this.createBackdropStyle({
            width: documentBoundingRect.width - (elementBoundingRect.left + scrollX + elementBoundingRect.width),
            height: documentBoundingRect.height,
            top: 0,
            left: elementBoundingRect.left + scrollX + elementBoundingRect.width
        }), this.backdropElements[3]);
    }

    private subscribeToWindowResizeEvent() {
        const resizeObservable$ = fromEvent(window, 'resize');
        this.windowResizeSubscription$ = resizeObservable$
            .pipe(
                debounce(() => interval(10))
            )
            .subscribe(
                () => {
                    this.createBackdrop();
                    ScrollingUtil.ensureVisible(this.targetHtmlElement);
                }
            );
    }

    public close() {
        if (this.backdropElements) {
            this.removeBackdropElement();
            this.windowResizeSubscription$.unsubscribe();
        }
    }

    private removeBackdropElement() {
        this.backdropElements.forEach(backdropElement => this.renderer.removeChild(document.body, backdropElement));
        this.backdropElements = undefined;
    }

    private applyStyles(styles: Partial<CSSStyleDeclaration>, element: HTMLElement) {
        for (const name of Object.keys(styles)) {
            this.renderer.setStyle(element, name, styles[name]);
        }
    }

    private createBackdropStyle(rectangle: { width: number; height: number; top: number; left: number; }) {
        return {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${rectangle.width}px`,
            height: `${rectangle.height}px`,
            top: `${rectangle.top}px`,
            left: `${rectangle.left}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '101'
        } as Partial<CSSStyleDeclaration>;
    }

    private createBackdropElement() {
        const backdropElement = this.renderer.createElement('div');
        this.renderer.addClass(backdropElement, 'ngx-ui-tour_backdrop');
        this.renderer.appendChild(document.body, backdropElement);
        return backdropElement;
    }

    private createBackdropElements() {
        const leftBackdropElement = this.createBackdropElement();
        const topBackdropElement = this.createBackdropElement();
        const bottomBackdropElement = this.createBackdropElement();
        const rightBackdropElement = this.createBackdropElement();

        return [leftBackdropElement, topBackdropElement, bottomBackdropElement, rightBackdropElement];
    }
}
