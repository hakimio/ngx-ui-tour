import {ElementRef, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {fromEvent, interval, merge, Subscription} from 'rxjs';
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
        const boundingRect = this.targetHtmlElement.getBoundingClientRect(),
            scrollX = window.scrollX ?? window.pageXOffset,
            scrollY = window.scrollY ?? window.pageYOffset,
            width = window.innerWidth,
            height = window.innerHeight;

        if (!this.backdropElements) {
            this.backdropElements = this.createBackdropElements();
        }

        this.applyStyles(this.createBackdropStyle(boundingRect.left + scrollX, height + scrollY, 0, 0), this.backdropElements[0]);
        this.applyStyles(this.createBackdropStyle(boundingRect.width, boundingRect.top + scrollY, 0, boundingRect.left + scrollX), this.backdropElements[1]);
        this.applyStyles(this.createBackdropStyle(boundingRect.width, height + scrollY - (boundingRect.top + scrollY) - boundingRect.height, boundingRect.top + scrollY + boundingRect.height, boundingRect.left + scrollX), this.backdropElements[2]);
        this.applyStyles(this.createBackdropStyle(width + scrollX - (boundingRect.left + scrollX + boundingRect.width), height + scrollY, 0, boundingRect.left + scrollX + boundingRect.width), this.backdropElements[3]);
    }

    private subscribeToWindowResizeEvent() {
        const resizeObservable$ = merge(fromEvent(window, 'resize'), fromEvent(window, 'scroll'));
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

    private createBackdropStyle(width: number, height: number, top: number, left: number) {
        return {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${width}px`,
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
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
