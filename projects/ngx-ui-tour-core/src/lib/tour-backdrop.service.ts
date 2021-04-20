import {ElementRef, Injectable, RendererFactory2} from '@angular/core';
import type { Renderer2 } from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounce} from 'rxjs/operators';
import {ScrollingUtil} from './scrolling-util';

@Injectable()
export class TourBackdropService {
  private renderer: Renderer2;
  private backdropBaseElement: HTMLElement;
  private backdropElement: HTMLElement;
  private targetHtmlElement: HTMLElement;
  windowResizeSubscription$: Subscription;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public show(targetElement: ElementRef) {
    const boundingRect = targetElement.nativeElement.getBoundingClientRect();

    if (!this.backdropElement) {
      this.createBackdrop();
      this.subscribeToWindowResizeEvent();
    }

    this.targetHtmlElement = targetElement.nativeElement;
    this.setBackdropElStyles(boundingRect);
  }

  private createBackdrop() {
    this.createBackdropBaseElement();
    this.createBackdropElement();
  }

  private createBackdropBaseElement() {
    const baseElStyles: Partial<CSSStyleDeclaration> = {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
      zIndex: '100'
    };

    this.backdropBaseElement = this.renderer.createElement('div');
    this.applyStyles(baseElStyles, this.backdropBaseElement);
    this.renderer.appendChild(document.body, this.backdropBaseElement);
  }

  private createBackdropElement() {
    this.backdropElement = this.renderer.createElement('div');
    this.renderer.addClass(this.backdropElement, 'ngx-ui-tour_backdrop');
    this.renderer.appendChild(document.body, this.backdropElement);
  }

  private subscribeToWindowResizeEvent() {
    const resizeObservable$ = fromEvent(window, 'resize');
    this.windowResizeSubscription$ = resizeObservable$
      .pipe(
        debounce(() => interval(10))
      )
      .subscribe(
        () => {
          const boundingRect = this.targetHtmlElement.getBoundingClientRect();
          this.setBackdropElStyles(boundingRect);
          ScrollingUtil.ensureVisible(this.targetHtmlElement);
        }
      );
  }

  public close() {
    if (this.backdropElement) {
      this.removeBackdropElement();
      this.windowResizeSubscription$.unsubscribe();
    }
  }

  private removeBackdropElement() {
    this.renderer.removeChild(document.body, this.backdropBaseElement);
    this.renderer.removeChild(document.body, this.backdropElement);
    this.backdropBaseElement = null;
    this.backdropElement = null;
  }

  private setBackdropElStyles(boundingRect: DOMRect) {
    const scrollX = window.scrollX ?? window.pageXOffset,
      scrollY = window.scrollY ?? window.pageYOffset,
      styles: Partial<CSSStyleDeclaration> = {
        position: 'absolute',
        width: `${boundingRect.width}px`,
        height: `${boundingRect.height}px`,
        top: `${boundingRect.top + scrollY}px`,
        left: `${boundingRect.left + scrollX}px`,
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
        zIndex: '101'
      };

    this.applyStyles(styles, this.backdropElement);
  }

  private applyStyles(styles: Partial<CSSStyleDeclaration>, element: HTMLElement) {
    for (const name of Object.keys(styles)) {
      this.renderer.setStyle(element, name, styles[name]);
    }
  }

}
