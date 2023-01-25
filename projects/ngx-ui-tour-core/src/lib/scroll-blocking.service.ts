import {inject, Injectable, PLATFORM_ID, RendererFactory2} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

interface ViewportScrollPosition {
    top: number;
    left: number;
}

const SCROLLBLOCK_STYLES: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    width: '100%',
    overflowY: 'scroll'
};

// Implementation based on Angular CDK "BlockScrollStrategy":
// https://github.com/angular/components/blob/main/src/cdk/overlay/scroll/block-scroll-strategy.ts
@Injectable({
    providedIn: 'root'
})
export class ScrollBlockingService {

    private isEnabled = false;
    private prevHTMLStyles = {
        top: '',
        left: ''
    };
    private prevScrollPosition: ViewportScrollPosition;

    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer = this.rendererFactory.createRenderer(null, null);

    enable() {
        if (!this.canBeEnabled()) {
            return;
        }

        const root = this.document.documentElement;

        this.prevScrollPosition = this.getViewportScrollPosition();

        this.prevHTMLStyles.left = root.style.left || '';
        this.prevHTMLStyles.top = root.style.top || '';
        root.style.left = `${-this.prevScrollPosition.left}px`;
        root.style.top = `${-this.prevScrollPosition.top}px`;
        this.setStyles();

        this.isEnabled = true;
    }

    disable() {
        if (!this.isEnabled) {
            return;
        }

        const html = this.document.documentElement,
            body = this.document.body,
            htmlStyle = html.style,
            bodyStyle = body.style,
            prevHtmlScrollBehavior = htmlStyle.scrollBehavior || '',
            prevBodyScrollBehavior = bodyStyle.scrollBehavior || '',
            window = this.getWindow();

        htmlStyle.left = this.prevHTMLStyles.left;
        htmlStyle.top = this.prevHTMLStyles.top;
        this.removeStyles();

        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';

        window.scroll(this.prevScrollPosition.left, this.prevScrollPosition.top);

        htmlStyle.scrollBehavior = prevHtmlScrollBehavior;
        bodyStyle.scrollBehavior = prevBodyScrollBehavior;

        this.isEnabled = false;
    }

    private setStyles() {
        const properties = Object.keys(SCROLLBLOCK_STYLES),
            root = this.document.documentElement;

        for (const property of properties) {
            this.renderer.setStyle(root, property, SCROLLBLOCK_STYLES[property]);
        }
    }

    private removeStyles() {
        const properties = Object.keys(SCROLLBLOCK_STYLES),
            root = this.document.documentElement;

        for (const property of properties) {
            this.renderer.removeStyle(root, property);
        }
    }

    private getViewportScrollPosition(): ViewportScrollPosition {
        const document = this.document;
        const window = this.getWindow();
        const documentElement = document.documentElement;
        const documentRect = documentElement.getBoundingClientRect();

        const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0,
            left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;

        return {top, left};
    }

    private canBeEnabled(): boolean {
        if (!this.isBrowser || this.isEnabled) {
            return false;
        }

        const window = this.getWindow(),
            viewportWidth = window.innerWidth,
            viewportHeight = window.innerHeight,
            body = this.document.body;

        return body.scrollHeight > viewportHeight || body.scrollWidth > viewportWidth;
    }

    private getWindow(): Window {
        return this.document.defaultView || window;
    }

}