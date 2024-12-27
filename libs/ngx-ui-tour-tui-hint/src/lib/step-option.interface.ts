import {IStepOption} from 'ngx-ui-tour-core';
import {TuiHintDirection} from '@taiga-ui/core';

export interface ITuiHintStepOption extends IStepOption {
    placement?: TuiHintDirection;
}
