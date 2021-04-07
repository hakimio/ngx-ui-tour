import { IStepOption } from 'ngx-ui-tour-core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

export interface INgxpStepOption extends IStepOption {
    placement?: NgxPopperjsPlacements;
    popperSettings?: {
        boundariesElement?: string;
        closeOnClickOutside?: boolean;
        disableAnimation?: boolean;
        disabled?: boolean;
        disableStyle?: boolean;
        hideOnClickOutside?: boolean;
        hideOnScroll?: boolean;
        hideTimeout?: number;
        positionFixed?: boolean;
        showDelay?: number;
        showOnStart?: boolean;
        showTrigger?: NgxPopperjsTriggers;
        timeoutAfterShow?: number;
    };
}
