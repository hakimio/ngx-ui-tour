import { ElementRef, Injectable, RendererFactory2 } from '@angular/core';
import type { Renderer2 } from '@angular/core';
import { fromEvent, interval, merge, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { ScrollingUtil } from './scrolling-util';

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

        if (!this.backdropElements || this.backdropElements.length < 4) {
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

        let leftBackdropElement, topBackdropElement, bottomBackdropElement, rightBackdropElement;

        if (!this.backdropElements || this.backdropElements.length < 4) {
            leftBackdropElement = this.renderer.createElement('div');
            topBackdropElement = this.renderer.createElement('div');
            bottomBackdropElement = this.renderer.createElement('div');
            rightBackdropElement = this.renderer.createElement('div');

            this.renderer.addClass(leftBackdropElement, 'ngx-ui-tour_backdrop');
            this.renderer.addClass(topBackdropElement, 'ngx-ui-tour_backdrop');
            this.renderer.addClass(bottomBackdropElement, 'ngx-ui-tour_backdrop');
            this.renderer.addClass(rightBackdropElement, 'ngx-ui-tour_backdrop');

            this.renderer.appendChild(document.body, leftBackdropElement);
            this.renderer.appendChild(document.body, topBackdropElement);
            this.renderer.appendChild(document.body, bottomBackdropElement);
            this.renderer.appendChild(document.body, rightBackdropElement);

            this.backdropElements = [leftBackdropElement, topBackdropElement, bottomBackdropElement, rightBackdropElement];
        } else {
            leftBackdropElement = this.backdropElements[0];
            topBackdropElement = this.backdropElements[1];
            bottomBackdropElement = this.backdropElements[2];
            rightBackdropElement = this.backdropElements[3];
        }

        const leftBackdropStyles: Partial<CSSStyleDeclaration> = {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${boundingRect.left + scrollX}px`,
            height: `${height + scrollY}px`,
            top: `0px`,
            left: `0px`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '101'
        };
        const topBackdropStyles: Partial<CSSStyleDeclaration> = {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${boundingRect.width}px`,
            height: `${boundingRect.top + scrollY}px`,
            top: `0px`,
            left: `${boundingRect.left + scrollX}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '101'
        };
        const bottomBackdropStyles: Partial<CSSStyleDeclaration> = {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${boundingRect.width}px`,
            height: `${height + scrollY - (boundingRect.top + scrollY) - boundingRect.height}px`,
            top: `${boundingRect.top + scrollY + boundingRect.height}px`,
            left: `${boundingRect.left + scrollX}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '101'
        };
        const rightBackdropStyles: Partial<CSSStyleDeclaration> = {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${width + scrollX - (boundingRect.left + scrollX + boundingRect.width)}px`,
            height: `${height + scrollY}px`,
            top: `0px`,
            left: `${boundingRect.left + scrollX + boundingRect.width}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '101'
        };

        this.applyStyles(leftBackdropStyles, leftBackdropElement);
        this.applyStyles(topBackdropStyles, topBackdropElement);
        this.applyStyles(bottomBackdropStyles, bottomBackdropElement);
        this.applyStyles(rightBackdropStyles, rightBackdropElement);
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

}
