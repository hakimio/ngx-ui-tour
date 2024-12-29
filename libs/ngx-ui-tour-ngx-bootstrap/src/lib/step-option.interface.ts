import type {IStepOption} from 'ngx-ui-tour-core';
import type {AvailableBSPositions} from 'ngx-bootstrap/positioning';

export interface INgxbStepOption extends IStepOption {
    placement?: AvailableBSPositions;
    useLegacyTitle?: boolean;
}
