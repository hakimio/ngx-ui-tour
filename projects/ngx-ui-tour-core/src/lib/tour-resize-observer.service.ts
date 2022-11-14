import { Inject, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TourResizeObserverService {
  private _resizeSubject = new Subject();

  get resizeSubject() {
    return this._resizeSubject
  }

  private resizeObserver?: ResizeObserver;

  constructor(@Inject(NgZone) ngZone: NgZone) {
    this.resizeObserver = ResizeObserver ? new ResizeObserver(entries => {
      ngZone.run(() => {
        this._resizeSubject.next(entries)
      })
    }) : undefined;
  }

  observe(target: Element, options?: ResizeObserverOptions) {
    this.resizeObserver?.observe(target, options)
  }

  unobserve(target: Element) {
    this.resizeObserver?.unobserve(target)
  }

  ngOnDestroy() {
    this._resizeSubject.unsubscribe()
    this.resizeObserver?.disconnect()
  }
}
