import {IStepOption} from 'ngx-ui-tour-core';
import {AvailableBSPositions} from 'ngx-bootstrap/positioning';

export interface INgxbStepOption extends IStepOption {
    placement?: AvailableBSPositions;
    useLegacyTitle?: boolean;
}
