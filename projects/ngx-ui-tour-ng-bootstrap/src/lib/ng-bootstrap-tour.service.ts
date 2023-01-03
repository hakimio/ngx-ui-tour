import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';

import {INgbStepOption} from './step-option.interface';

@Injectable({
    providedIn: 'root',
})
export class NgbTourService<T extends INgbStepOption = INgbStepOption> extends TourService<T> {}
