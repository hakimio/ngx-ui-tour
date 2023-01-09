import {IStepOption} from 'ngx-ui-tour-core';

export interface IonStepOption extends IStepOption {
    placement?: IonPopoverPlacement;
}

export interface IonPopoverPlacement {
    alignment?: 'center' | 'end' | 'start';
    side?: 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top';
}
