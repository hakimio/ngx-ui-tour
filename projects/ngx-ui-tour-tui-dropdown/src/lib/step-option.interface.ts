import {IStepOption} from 'ngx-ui-tour-core';
import {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core';

export interface ITuiDdStepOption extends IStepOption {
    placement?: TuiDdPlacement;
}

export interface TuiDdPlacement {
    horizontalDirection?: TuiHorizontalDirection;
    verticalDirection?: TuiVerticalDirection;
}
