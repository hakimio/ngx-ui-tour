import {ElementSides, isInViewport} from './is-in-viewport';

export class ScrollingUtil {

  static ensureVisible(htmlElement: HTMLElement) {
    if (!isInViewport(htmlElement, ElementSides.Bottom)) {
      htmlElement.scrollIntoView(false);
    } else if (!isInViewport(htmlElement, ElementSides.Top)) {
      htmlElement.scrollIntoView(true);
    }
  }

}
