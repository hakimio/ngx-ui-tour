import {isPlatformBrowser} from '@angular/common';
import {inject, Injectable, PLATFORM_ID, DOCUMENT} from '@angular/core';
import {debounceTime, fromEvent, merge, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TourResizeObserverService {

    private readonly resizeElSubject = new Subject<void>();
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isResizeObserverSupported = isPlatformBrowser(this.platformId) && !!ResizeObserver;
    private resizeObserver?: ResizeObserver;
    private readonly document = inject(DOCUMENT);
    private readonly window = this.document.defaultView;

    public readonly resize$ = merge(
        this.resizeElSubject,
        fromEvent(this.window, 'resize')
    ).pipe(
        debounceTime(10)
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
