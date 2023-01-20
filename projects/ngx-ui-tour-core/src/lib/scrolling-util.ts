import {ElementSides, isInViewport} from './is-in-viewport';

type WebkitHTMLElement = HTMLElement & {
    scrollIntoViewIfNeeded: (centerIfNeeded?: boolean) => void;
};

function isWebkitHTMLElement(htmlElement: HTMLElement): htmlElement is WebkitHTMLElement {
    return typeof (htmlElement as WebkitHTMLElement).scrollIntoViewIfNeeded === 'function';
}

export class ScrollingUtil {

    static ensureVisible(htmlElement: HTMLElement, center: boolean) {
        if (center) {
            htmlElement.scrollIntoView({
                block: 'center',
                inline: 'center'
            });
            return;
        }

        if (isWebkitHTMLElement(htmlElement)) {
            htmlElement.scrollIntoViewIfNeeded(false);
            return;
        }

        if (!isInViewport(htmlElement, ElementSides.Bottom)) {
            htmlElement.scrollIntoView(false);
        } else if (!isInViewport(htmlElement, ElementSides.Top)) {
            htmlElement.scrollIntoView(true);
        }
    }

}
