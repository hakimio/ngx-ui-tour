import {ElementSides} from './is-in-viewport';

export function isCovered(htmlElement: HTMLElement, sidesToCheck: ElementSides = ElementSides.All): boolean {
    const rect = htmlElement.getBoundingClientRect(),
        topEl = document.elementFromPoint(rect.left, rect.top),
        bottomEl = document.elementFromPoint(rect.right, rect.bottom),
        isTopCovered = !!topEl && topEl !== htmlElement && !areElementsRelated(topEl, htmlElement),
        isBottomCovered = !!bottomEl && bottomEl !== htmlElement && !areElementsRelated(bottomEl, htmlElement);

    if (sidesToCheck === ElementSides.Top) {
        return isTopCovered;
    }

    if (sidesToCheck === ElementSides.Bottom) {
        return isBottomCovered;
    }

    return isTopCovered || isBottomCovered;
}

function areElementsRelated(el1: Node, el2: Node): boolean {
    return el1.contains(el2) || el2.contains(el1);
}