import {ElementRef, inject, Injectable, RendererFactory2} from '@angular/core';
import {Subscription} from 'rxjs';
import {ScrollingUtil} from './scrolling-util';
import {TourResizeObserverService} from './tour-resize-observer.service';

interface Rectangle {
    width: number;
    height: number;
    top: number;
    left: number;
}

export interface BackdropConfig {
    zIndex?: string;
    backgroundColor?: string;
}

@Injectable({
    providedIn: 'root'
})
export class TourBackdropService {

    private backdropElements: HTMLElement[];
    private targetHtmlElement: HTMLElement;
    private isScrollingEnabled: boolean;
    private config: BackdropConfig;
    private resizeSubscription: Subscription;

    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer = this.rendererFactory.createRenderer(null, null);
    private readonly resizeObserverService = inject(TourResizeObserverService);

    public show(targetElement: ElementRef, config: BackdropConfig, isScrollingEnabled = true) {
        if (this.targetHtmlElement) {
            this.resizeObserverService.unobserveElement(this.targetHtmlElement);
        }

        this.isScrollingEnabled = isScrollingEnabled;
        this.targetHtmlElement = targetElement.nativeElement;
        this.config = config;

        this.resizeObserverService.observeElement(this.targetHtmlElement);

        if (!this.backdropElements) {
            this.backdropElements = this.createBackdropElements();
            this.subscribeToResizeEvents();
        }

        this.setBackdropPosition();
    }

    private setBackdropPosition() {
        const elementBoundingRect = this.targetHtmlElement.getBoundingClientRect(),
            docEl = document.documentElement,
            scrollHeight = docEl.scrollHeight,
            scrollWidth = docEl.scrollWidth,
            scrollX = window.scrollX,
            scrollY = window.scrollY,
            leftRect: Rectangle = {
                width: elementBoundingRect.left + scrollX,
                height: scrollHeight,
                top: 0,
                left: 0
            },
            topRect: Rectangle = {
                width: elementBoundingRect.width,
                height: elementBoundingRect.top + scrollY,
                top: 0,
                left: elementBoundingRect.left + scrollX
            },
            bottomRect: Rectangle = {
                width: elementBoundingRect.width,
                height: scrollHeight - (elementBoundingRect.bottom + scrollY),
                top: elementBoundingRect.bottom + scrollY,
                left: elementBoundingRect.left + scrollX
            },
            rightRect: Rectangle = {
                width: scrollWidth - (elementBoundingRect.right + scrollX),
                height: scrollHeight,
                top: 0,
                left: elementBoundingRect.right + scrollX
            },
            rectangles: Rectangle[] = [leftRect, topRect, bottomRect, rightRect];

        for (let i = 0; i < rectangles.length; i++) {
            const styles = this.createBackdropStyles(rectangles[i]);
            this.applyStyles(styles, this.backdropElements[i]);
        }
    }

    private subscribeToResizeEvents() {
        this.resizeSubscription = this.resizeObserverService.resize$
            .subscribe(
                () => {
                    this.setBackdropPosition();
                    ScrollingUtil.ensureVisible(this.targetHtmlElement);
                }
            );
    }

    public close() {
        if (this.backdropElements) {
            this.resizeObserverService.unobserveElement(this.targetHtmlElement)
            this.removeBackdropElement();
            this.resizeSubscription.unsubscribe();
        }
    }

    public disconnectResizeObserver() {
        this.resizeObserverService.disconnect()
    }

    private removeBackdropElement() {
        this.backdropElements.forEach(
            backdropElement => this.renderer.removeChild(document.body, backdropElement)
        );
        this.backdropElements = undefined;
    }

    private applyStyles(styles: Partial<CSSStyleDeclaration>, element: HTMLElement) {
        for (const name of Object.keys(styles)) {
            this.renderer.setStyle(element, name, styles[name]);
        }
    }

    private createBackdropStyles(rectangle: Rectangle) {
        return {
            position: this.isScrollingEnabled ? 'absolute' : 'fixed',
            width: `${rectangle.width}px`,
            height: `${rectangle.height}px`,
            top: `${rectangle.top}px`,
            left: `${rectangle.left}px`,
            backgroundColor: this.config?.backgroundColor ?? 'rgba(0, 0, 0, 0.7)',
            zIndex: this.config?.zIndex ?? '101'
        } as Partial<CSSStyleDeclaration>;
    }

    private createBackdropElement() {
        const backdropElement = this.renderer.createElement('div');
        this.renderer.addClass(backdropElement, 'ngx-ui-tour_backdrop');
        this.renderer.appendChild(document.body, backdropElement);
        return backdropElement;
    }

    private createBackdropElements() {
        return Array
            .from({ length: 4 })
            .map(() => this.createBackdropElement());
    }

}
