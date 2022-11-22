import {isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {debounce, fromEvent, interval, merge, Observable, Subject, Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TourResizeObserverService {
    private resizeElSubject = new Subject<void>();
    private isResizeObserverSupported = false;

    public readonly resize$ = merge(
        this.resizeElSubject,
        fromEvent(window, 'resize')
    ).pipe(
        debounce(() => interval(10))
    );

    private resizeObserver?: ResizeObserver;
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        this.isResizeObserverSupported = isPlatformBrowser(platformId) && !!ResizeObserver;
    }

    observeElement(target: Element, options?: ResizeObserverOptions) {
        if (this.isResizeObserverSupported && !this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeElSubject.next();
            });
        }
        this.resizeObserver?.observe(target, options);
    }

    unobserveElement(target: Element) {
        this.resizeObserver?.unobserve(target);
    }


    disconnect() {
        this.resizeObserver?.disconnect();
        this.resizeObserver = undefined;
    }
}
