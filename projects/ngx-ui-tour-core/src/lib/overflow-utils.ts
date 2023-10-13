export function isHeightOverflowing(element: HTMLElement, scrollContainer: HTMLElement): boolean {
    return scrollContainer.getBoundingClientRect().height < element.getBoundingClientRect().height;
}

export function getOverlap(element: HTMLElement, scrollContainer: HTMLElement): DOMRect {
    const rectA = element.getBoundingClientRect(),
        rectB = scrollContainer.getBoundingClientRect(),
        top = Math.max(rectA.top, rectB.top),
        left = Math.max(rectA.left, rectB.left),
        right = Math.min(rectA.right, rectB.right),
        bottom = Math.min(rectA.bottom, rectB.bottom);
    return new DOMRect(left, top, right - left, bottom - top);
}
