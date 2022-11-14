import {Injectable} from '@angular/core';
import {fromEvent, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourResizeObserverService {
  private resizeSubject = new Subject();
  private windowResize$: Subscription;

  public readonly resize$ = this.resizeSubject.asObservable()

  private resizeObserver?: ResizeObserver;

  observeElement(target: Element, options?: ResizeObserverOptions) {
      if (!this.resizeObserver) {
          this.resizeObserver = ResizeObserver ? new ResizeObserver(entries => {
              this.resizeSubject.next(entries)
          }) : undefined;
      }
      this.resizeObserver?.observe(target, options)
  }

  unobserveElement(target: Element) {
      this.resizeObserver?.unobserve(target)
  }

  observeWindowResize() {
      this.windowResize$ = fromEvent(window, 'resize')
          .subscribe((e) => this.resizeSubject.next(e));
  }

  unobserveWindowResize() {
      this.windowResize$.unsubscribe()
  }

  disconnect() {
    this.resizeSubject.unsubscribe()
    this.resizeObserver?.disconnect()
    this.resizeObserver = undefined
  }
}
