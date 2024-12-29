import type {IStepOption} from 'ngx-ui-tour-core';
import type {MenuPositionX, MenuPositionY} from '@angular/material/menu';

export interface IMdStepOption extends IStepOption {
    placement?: MdMenuPlacement;
    closeOnOutsideClick?: boolean;
    showArrow?: boolean;
}

export interface MdMenuPlacement {
    xPosition?: MenuPositionX;
    yPosition?: MenuPositionY;
    /**
     * Enable to position popover horizontally instead of vertically
     */
    horizontal?: boolean;
}
