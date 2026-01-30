import type {IStepOption} from 'ngx-ui-tour-core';

export interface NgZorroStepOption extends IStepOption {
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
        'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    closeOnOutsideClick?: boolean;
}
