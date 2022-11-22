import { Injectable } from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-core';

import { INgbStepOption } from './step-option.interface';

@Injectable({
    providedIn: 'root',
})
export class NgbTourService<T extends IStepOption = INgbStepOption> extends TourService<T> {}
