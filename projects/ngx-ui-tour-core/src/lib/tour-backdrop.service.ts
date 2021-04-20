import {ElementRef, Injectable, RendererFactory2} from '@angular/core';
import type { Renderer2 } from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounce} from 'rxjs/operators';
import {ScrollingUtil} from './scrolling-util';

@Injectable()
export class TourBackdropService {
  private renderer: Renderer2;
  private backdropElement: HTMLElement;
  private targetHtmlElement: HTMLElement;
  windowResizeSubscription$: Subscription;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public show(targetElement: ElementRef) {
    const boundingRect = targetElement.nativeElement.getBoundingClientRect();

    if (!this.backdropElement) {
      this.backdropElement = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropElement, 'ngx-ui-tour_backdrop');
      this.renderer.appendChild(document.body, this.backdropElement);

      this.subscribeToWindowResizeEvent();
    }

    this.targetHtmlElement = targetElement.nativeElement;
    this.setStyles(boundingRect);
  }

  subscribeToWindowResizeEvent() {
    const resizeObservable$ = fromEvent(window, 'resize');
    this.windowResizeSubscription$ = resizeObservable$
      .pipe(
        debounce(() => interval(10))
      )
      .subscribe(
        () => {
          const boundingRect = this.targetHtmlElement.getBoundingClientRect();
          this.setStyles(boundingRect);
          ScrollingUtil.ensureVisible(this.targetHtmlElement);
        }
      );
  }

  public close() {
    if (this.backdropElement) {
      this.renderer.removeChild(document.body, this.backdropElement);
      this.windowResizeSubscription$.unsubscribe();
      this.backdropElement = null;
    }
  }

  private setStyles(boundingRect: DOMRect) {
    const scrollX = window.scrollX ?? window.pageXOffset,
      scrollY = window.scrollY ?? window.pageYOffset,
      styles = {
        position: 'absolute',
        width: `${boundingRect.width}px`,
        height: `${boundingRect.height}px`,
        top: `${boundingRect.top + scrollY}px`,
        left: `${boundingRect.left + scrollX}px`,
        'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
        'z-index': '100'
      };

    for (const name of Object.keys(styles)) {
      this.renderer.setStyle(this.backdropElement, name, styles[name]);
    }
  }
}
