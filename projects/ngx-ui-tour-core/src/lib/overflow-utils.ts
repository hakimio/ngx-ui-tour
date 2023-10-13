export class OverflowUtils {

    static getVisibleSection(childRect: DOMRect, containerRect: DOMRect): DOMRect {
        return OverflowUtils._isHeightOverflowing(childRect, containerRect) ?
            OverflowUtils._getOverlap(childRect, containerRect) :
            childRect;
    }

    static isHeightOverflowing(child: HTMLElement | DOMRect, container: HTMLElement | DOMRect): boolean {
        return OverflowUtils._isHeightOverflowing(
            child instanceof HTMLElement ? child.getBoundingClientRect() : child,
            container instanceof HTMLElement ? container.getBoundingClientRect() : container,
        );
    }

    private static _isHeightOverflowing(childRect: DOMRect, containerRect: DOMRect): boolean {
        return containerRect.height < childRect.height;
    }

    private static _getOverlap(a: DOMRect, b: DOMRect): DOMRect {
        const top = Math.max(a.top, b.top),
            left = Math.max(a.left, b.left),
            right = Math.min(a.right, b.right),
            bottom = Math.min(a.bottom, b.bottom);
        return new DOMRect(left, top, right - left, bottom - top);
    }
}

