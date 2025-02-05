import type {IStepOption} from 'ngx-ui-tour-core';
import type {Placement} from '@ng-bootstrap/ng-bootstrap';

export interface INgbStepOption extends IStepOption {
    placement?: Placement | 'after' | 'after-top' | 'after-bottom' |
        'top-after' | 'top-before' | 'bottom-after' | 'bottom-before' |
        'before' | 'before-top' | 'before-bottom' | 'below' | 'above';
    useLegacyTitle?: boolean;
}
