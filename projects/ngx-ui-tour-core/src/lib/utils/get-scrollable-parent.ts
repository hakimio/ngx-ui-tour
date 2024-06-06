export function getScrollableParent(node: Node): HTMLElement | null {
    if (!(node instanceof HTMLElement || node instanceof ShadowRoot)) {
        return null;
    }

    const element = node instanceof ShadowRoot ? node.host as HTMLElement : node;

    const style = getComputedStyle(element),
        isScrollable = element.scrollHeight > element.clientHeight,
        overflow = style.overflowY,
        scrollableOverflow = ['scroll', 'auto'];

    if (isScrollable && scrollableOverflow.includes(overflow)) {
        return element;
    }

    return getScrollableParent(element.parentNode);
}
