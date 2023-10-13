export class ScrollUtils {
    
    static getScrollContainer(
        userScrollContainer: string | HTMLElement | undefined
    ): HTMLElement | null {
        if (typeof userScrollContainer === 'string') {
            return document.documentElement.querySelector(userScrollContainer);
        }
        if (userScrollContainer instanceof HTMLElement) {
            return userScrollContainer;
        }

        return null;
    }
    
}
