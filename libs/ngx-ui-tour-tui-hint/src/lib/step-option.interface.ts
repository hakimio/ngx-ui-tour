import type {IStepOption} from 'ngx-ui-tour-core';
import type {TuiHintDirection} from '@taiga-ui/core';

export interface ITuiHintStepOption extends IStepOption {
    placement?: TuiHintDirection;
}
