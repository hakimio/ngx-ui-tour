import {inject, Injectable, RendererFactory2} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AnchorClickService {

    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer = this.rendererFactory.createRenderer(null, null);

    private unListenToAnchorClickFn: () => void;

    public removeListener() {
        if (this.unListenToAnchorClickFn) {
            this.unListenToAnchorClickFn();
            this.unListenToAnchorClickFn = undefined;
        }
    }

    public addListener(anchorEl: HTMLElement, callback: () => void) {
        this.unListenToAnchorClickFn = this.renderer.listen(anchorEl, 'click', callback);
    }
}