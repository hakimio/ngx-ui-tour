import type {IStepOption} from 'ngx-ui-tour-core';

export interface IonStepOption extends IStepOption {
    placement?: IonPopoverPlacement;
    showArrow?: boolean;
    trapFocus?: boolean;
}

export interface IonPopoverPlacement {
    alignment?: 'center' | 'end' | 'start';
    side?: 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top';
}
