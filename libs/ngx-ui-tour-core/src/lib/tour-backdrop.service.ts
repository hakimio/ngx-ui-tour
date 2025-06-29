import type {ElementRef} from '@angular/core';
import {inject, Injectable, RendererFactory2, DOCUMENT} from '@angular/core';
import type {Subscription} from 'rxjs';
import {ScrollingService} from './scrolling.service';
import {TourResizeObserverService} from './tour-resize-observer.service';
import type {IStepOption} from './tour.service';

import {OverflowUtils, ScrollUtils} from './utils';

interface Rectangle {
    width: number;
    height: number;
    top: number;
    left: number;
}

export interface BackdropConfig {
    zIndex?: string;
    backgroundColor?: string;
    /**
     * Parent container CSS selector or html element reference. Set to fix backdrop stacking issues. Defaults to body.
     */
    parentContainer?: string | HTMLElement;
    /**
     * Offset in pixels to add space between the backdrop and the anchor element.
     */
    offset?: number;
}

@Injectable({
    providedIn: 'root'
})
export class TourBackdropService {

    private backdropElements: HTMLElement[];
    private targetHtmlElement: HTMLElement;
    private step: IStepOption;
    private resizeSubscription: Subscription;
    private isSpotlightClosed = false;

    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer = this.rendererFactory.createRenderer(null, null);
    private readonly resizeObserverService = inject(TourResizeObserverService);
    private readonly scrollingService = inject(ScrollingService);
    private readonly document = inject(DOCUMENT);

    public show(targetElement: ElementRef, step: IStepOption) {
        if (this.targetHtmlElement) {
            this.resizeObserverService.unobserveElement(this.targetHtmlElement);
        }

        this.targetHtmlElement = targetElement.nativeElement;
        this.step = step;

        this.resizeObserverService.observeElement(this.targetHtmlElement);

        if (!this.backdropElements) {
            this.backdropElements = this.createBackdropElements();
            this.subscribeToResizeEvents();
        }

        this.isSpotlightClosed = false;
        this.setBackdropPosition();
    }

    public closeSpotlight() {
        if (!this.backdropElements) {
            return;
        }

        const targetRect = this.targetHtmlElement.getBoundingClientRect(),
            centerX = targetRect.left + (targetRect.width / 2),
            centerY = targetRect.top + (targetRect.height / 2),
            centerRect = {
                top: centerY,
                right: centerX,
                bottom: centerY,
                left: centerX,
                width: 0,
                height: 0
            } as DOMRect;

        this.isSpotlightClosed = true;
        this.setBackdropPosition(centerRect);
    }

    private setBackdropPosition(rectangle: DOMRect = null) {
        const docEl = this.document.documentElement,
            scrollContainer = ScrollUtils.getScrollContainer(this.targetHtmlElement, this.step.scrollContainer) ?? docEl,
            elementBoundingRect = rectangle ?? this.targetHtmlElement.getBoundingClientRect(),
            scrollContainerRect = scrollContainer.getBoundingClientRect(),
            visibleSection = OverflowUtils.getVisibleSection(elementBoundingRect, scrollContainerRect),
            scrollHeight = docEl.scrollHeight,
            scrollWidth = docEl.scrollWidth,
            window = this.document.defaultView,
            scrollX = window.scrollX,
            scrollY = window.scrollY,
            offset = this.isSpotlightClosed ? 0 : this.step.backdropConfig?.offset ?? 0,
            leftRect: Rectangle = {
                width: visibleSection.left + scrollX - offset,
                height: scrollHeight,
                top: 0,
                left: 0
            },
            topRect: Rectangle = {
                width: visibleSection.width + offset * 2,
                height: visibleSection.top + scrollY - offset,
                top: 0,
                left: visibleSection.left + scrollX - offset
            },
            bottomRect: Rectangle = {
                width: visibleSection.width + offset * 2,
                height: scrollHeight - (visibleSection.bottom + scrollY) - offset,
                top: visibleSection.bottom + scrollY + offset,
                left: visibleSection.left + scrollX - offset
            },
            rightRect: Rectangle = {
                width: scrollWidth - (visibleSection.right + scrollX) - offset,
                height: scrollHeight,
                top: 0,
                left: visibleSection.right + scrollX + offset
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
                    if (!this.step.disableScrollToAnchor) {
                        this.scrollingService.ensureVisible(this.targetHtmlElement, {
                            center: this.step.centerAnchorOnScroll,
                            smoothScroll: false
                        });
                    }
                }
            );
    }

    public close() {
        if (this.backdropElements) {
            this.resizeObserverService.unobserveElement(this.targetHtmlElement);
            this.removeBackdropElement();
            this.resizeSubscription.unsubscribe();
        }
    }

    public disconnectResizeObserver() {
        this.resizeObserverService.disconnect();
    }

    private removeBackdropElement() {
        this.backdropElements.forEach(
            backdropElement => this.renderer.removeChild(this.parentContainer, backdropElement)
        );
        this.backdropElements = undefined;
    }

    private applyStyles(styles: Partial<CSSStyleDeclaration>, element: HTMLElement) {
        for (const name of Object.keys(styles)) {
            this.renderer.setStyle(element, name, styles[name as keyof CSSStyleDeclaration]);
        }
    }

    private createBackdropStyles(rectangle: Rectangle) {
        const config = this.step.backdropConfig,
            normalizedRect = {
                ...rectangle,
                width: Math.max(rectangle.width, 0),
                height: Math.max(rectangle.height, 0)
            };

        return {
            position: 'absolute',
            width: `${normalizedRect.width}px`,
            height: `${normalizedRect.height}px`,
            top: `${normalizedRect.top}px`,
            left: `${normalizedRect.left}px`,
            backgroundColor: config?.backgroundColor ?? 'rgba(0, 0, 0, 0.7)',
            zIndex: config?.zIndex ?? '101'
        } as Partial<CSSStyleDeclaration>;
    }

    private createBackdropElement() {
        const backdropElement = this.renderer.createElement('div');
        this.renderer.addClass(backdropElement, 'ngx-ui-tour_backdrop');
        this.renderer.appendChild(this.parentContainer, backdropElement);
        return backdropElement;
    }

    private createBackdropElements() {
        return Array
            .from({length: 4})
            .map(() => this.createBackdropElement());
    }

    private get parentContainer(): HTMLElement {
        const parent = this.step.backdropConfig?.parentContainer;

        if (parent instanceof HTMLElement) {
            return parent;
        }
        if (typeof parent === 'string') {
            const queryResult = this.document.documentElement.querySelector(parent) as HTMLElement;

            return queryResult ?? this.document.body;
        }

        return this.document.body;
    }

}
