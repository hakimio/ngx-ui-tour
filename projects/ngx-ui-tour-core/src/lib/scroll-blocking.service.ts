import {inject, Injectable, PLATFORM_ID, RendererFactory2} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ScrollUtils} from './scroll-utils';

@Injectable({
    providedIn: 'root'
})
export class ScrollBlockingService {

    private isEnabled = false;
    private userScrollContainer: string | HTMLElement;

    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer = this.rendererFactory.createRenderer(null, null);

    enable(scrollContainer: string | HTMLElement) {
        if (!this.isBrowser || this.isEnabled) {
            return;
        }

        this.userScrollContainer = scrollContainer;
        this.toggleOverflow();
        this.isEnabled = true;
    }

    disable() {
        if (!this.isEnabled) {
            return;
        }

        this.toggleOverflow();
        this.isEnabled = false;
    }

    private toggleOverflow() {
        const scrollContainer = ScrollUtils.getScrollContainer(this.userScrollContainer) ?? document.documentElement;

        if (this.isEnabled) {
            this.renderer.removeStyle(scrollContainer, 'overflow');
        } else {
            this.renderer.setStyle(scrollContainer, 'overflow', 'hidden');
        }
    }

}