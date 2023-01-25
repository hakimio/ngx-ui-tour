import {ElementSides, isInViewport} from './is-in-viewport';
import {debounceTime, firstValueFrom, fromEvent, map, of, timeout} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export interface ScrollOptions {
    center: boolean;
    smoothScroll: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ScrollingService {

    private readonly document = inject(DOCUMENT);
    private readonly window = this.document.defaultView;
    private readonly waitForScrollFinish$ = fromEvent(this.window, 'scroll')
        .pipe(
            timeout({
                each: 75,
                with: () => of(undefined)
            }),
            debounceTime(50),
            map(() => undefined)
        );

    ensureVisible(htmlElement: HTMLElement, options: ScrollOptions): Promise<void> {
        const behavior: ScrollBehavior = options.smoothScroll ? 'smooth' : 'auto';

        if (options.center && !('safari' in this.window)) {
            htmlElement.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior
            });

            return options.smoothScroll ? firstValueFrom(this.waitForScrollFinish$) : Promise.resolve();
        }

        if (!isInViewport(htmlElement, ElementSides.Bottom)) {
            htmlElement.scrollIntoView({
                block: 'end',
                inline: 'nearest',
                behavior
            });
        } else if (!isInViewport(htmlElement, ElementSides.Top)) {
            htmlElement.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior
            });
        }

        return options.smoothScroll ? firstValueFrom(this.waitForScrollFinish$) : Promise.resolve();
    }

}
