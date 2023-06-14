import { IStepOption } from 'ngx-ui-tour-core';
import {AvailbleBSPositions} from 'ngx-bootstrap/positioning';

export interface INgxbStepOption extends IStepOption {
    placement?: AvailbleBSPositions;
}
