import {isPlatformBrowser} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {fromEvent, interval, merge, Subject} from 'rxjs';
import {debounce} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TourResizeObserverService {

    private readonly resizeElSubject = new Subject<void>();
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isResizeObserverSupported = isPlatformBrowser(this.platformId) && !!ResizeObserver;
    private resizeObserver?: ResizeObserver;

    public readonly resize$ = merge(
        this.resizeElSubject,
        fromEvent(window, 'resize')
    ).pipe(
        debounce(() => interval(10))
    );

    observeElement(target: Element) {
        if (this.isResizeObserverSupported && !this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(
                () => this.resizeElSubject.next()
            );
        }

        this.resizeObserver?.observe(target);
    }

    unobserveElement(target: Element) {
        this.resizeObserver?.unobserve(target);
    }

    disconnect() {
        this.resizeObserver?.disconnect();
        this.resizeObserver = undefined;
    }

}
