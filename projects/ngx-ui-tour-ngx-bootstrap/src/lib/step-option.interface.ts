import { IStepOption } from 'ngx-ui-tour-core';

export interface INgxbStepOption extends IStepOption {
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    containerClass?: string;
}
