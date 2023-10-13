export const enum Dimension {
  WIDTH,
  HEIGHT,
  ALL
}

export function isOverflowing(element: HTMLElement, scrollContainer: HTMLElement, dimension = Dimension.ALL): boolean {
  if (dimension === Dimension.HEIGHT)
    return scrollContainer.getBoundingClientRect().height < element.getBoundingClientRect().height;
  if (dimension === Dimension.WIDTH)
    return scrollContainer.getBoundingClientRect().width < element.getBoundingClientRect().width;

  return isOverflowing(element, scrollContainer, Dimension.HEIGHT) || isOverflowing(element, scrollContainer, Dimension.WIDTH);
}

export function getOverlap(element: HTMLElement, scrollContainer: HTMLElement): DOMRect {
  const
    rectA = element.getBoundingClientRect(),
    rectB = scrollContainer.getBoundingClientRect(),
    top = Math.max(rectA.top, rectB.top),
    left = Math.max(rectA.left, rectB.left),
    right = Math.min(rectA.right, rectB.right),
    bottom = Math.min(rectA.bottom, rectB.bottom);
  return new DOMRect(left, top, right - left, bottom - top);
}
