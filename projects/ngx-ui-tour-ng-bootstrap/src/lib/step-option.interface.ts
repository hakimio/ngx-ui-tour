import { IStepOption } from 'ngx-ui-tour-core';
import { Placement } from '@ng-bootstrap/ng-bootstrap';

export interface INgbStepOption extends IStepOption {
    popoverClass?: string
    placement?: Placement      | 'after'        | 'after-top'     | 'after-bottom'  |
    'top-after' | 'top-before' | 'bottom-after' | 'bottom-before' |
    'before'    | 'before-top' | 'before-bottom'| 'below'         | 'above';
}
