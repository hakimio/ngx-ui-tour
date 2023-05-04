import {IStepOption} from 'ngx-ui-tour-core';
import {MenuPositionX, MenuPositionY} from '@angular/material/menu';

export interface IMdStepOption extends IStepOption {
    popoverClass?: string;
    placement?: MdMenuPlacement;
    closeOnOutsideClick?: boolean;
}

export interface MdMenuPlacement {
    xPosition?: MenuPositionX;
    yPosition?: MenuPositionY;
}
