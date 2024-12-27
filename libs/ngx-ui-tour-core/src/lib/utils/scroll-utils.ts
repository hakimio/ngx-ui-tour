import {getScrollableParent} from './get-scrollable-parent';

export class ScrollUtils {
    
    static getScrollContainer(
        anchorEl: HTMLElement,
        userScrollContainer: string | HTMLElement | undefined
    ): HTMLElement | null {
        if (typeof userScrollContainer === 'string') {
            return document.documentElement.querySelector(userScrollContainer);
        }
        if (userScrollContainer instanceof HTMLElement) {
            return userScrollContainer;
        }

        return getScrollableParent(anchorEl);
    }
    
}
