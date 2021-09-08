import {IStepOption} from 'ngx-ui-tour-core';
import {MenuPositionX, MenuPositionY} from '@angular/material/menu';

export interface IMdStepOption extends IStepOption {
    placement?: MdMenuPlacement;
    closeOnOutsideClick?: boolean;
    disablePageScrolling?: boolean;
}

export interface MdMenuPlacement {
    xPosition?: MenuPositionX;
    yPosition?: MenuPositionY;
}
