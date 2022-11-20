import {isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {debounce, fromEvent, interval, merge, Observable, Subject, Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TourResizeObserverService {
    private resizeElSubject = new Subject<ResizeObserverEntry[]>();
    private isResizeObserverSupported = false;

    public readonly resize$: Observable<ResizeObserverEntry[] | Event>;

    private resizeObserver?: ResizeObserver;
    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
    ) {
        this.isResizeObserverSupported = isPlatformBrowser(platformId) && !!ResizeObserver;
        this.resize$ = merge(
            this.resizeElSubject,
            fromEvent(window, 'resize')
        ).pipe(
            debounce(() => interval(10))
        )
    }

    observeElement(target: Element, options?: ResizeObserverOptions) {
        if (this.isResizeObserverSupported && !this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(entries => {
                this.resizeElSubject.next(entries);
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
