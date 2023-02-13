import {ElementSides, isInViewport} from './is-in-viewport';
import {debounceTime, firstValueFrom, fromEvent, map, of, timeout} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {isCovered} from './is-covered';

export interface ScrollOptions {
    center: boolean;
    smoothScroll: boolean;
    scrollContainer?: string | HTMLElement;
}

@Injectable({
    providedIn: 'root'
})
export class ScrollingService {

    private readonly document = inject(DOCUMENT);
    private readonly window = this.document.defaultView;
    private scrollOptions: ScrollOptions;

    ensureVisible(htmlElement: HTMLElement, options: ScrollOptions): Promise<void> {
        this.scrollOptions = options;

        const behavior: ScrollBehavior = options.smoothScroll ? 'smooth' : 'auto';

        if (options.center && !('safari' in this.window)) {
            htmlElement.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior
            });

            return options.smoothScroll ? firstValueFrom(this.waitForScrollFinish$) : Promise.resolve();
        }

        if (!isInViewport(htmlElement, ElementSides.Bottom) || isCovered(htmlElement, ElementSides.Bottom)) {
            htmlElement.scrollIntoView({
                block: 'end',
                inline: 'nearest',
                behavior
            });
        } else if (!isInViewport(htmlElement, ElementSides.Top) || isCovered(htmlElement, ElementSides.Top)) {
            htmlElement.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior
            });
        }

        return options.smoothScroll ? firstValueFrom(this.waitForScrollFinish$) : Promise.resolve();
    }

    private get waitForScrollFinish$() {
        const scrollContainer = this.getScrollContainer();

        return fromEvent(scrollContainer, 'scroll')
            .pipe(
                timeout({
                    each: 75,
                    with: () => of(undefined)
                }),
                debounceTime(50),
                map(() => undefined)
            );
    }

    private getScrollContainer() {
        const scrollContainer = this.scrollOptions.scrollContainer;

        if (typeof scrollContainer === 'string') {
            const queryResult = this.document.documentElement.querySelector(scrollContainer) as HTMLElement;

            return queryResult ?? this.window;
        }
        if (scrollContainer instanceof HTMLElement) {
            return scrollContainer;
        }

        return this.window;
    }

}
