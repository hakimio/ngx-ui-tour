import {IStepOption} from 'ngx-ui-tour-core';
import {TuiDirection} from '@taiga-ui/core';

export interface ITuiHintStepOption extends IStepOption {
    placement?: TuiDirection;
}
