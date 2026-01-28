import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';

import type {INgbStepOption} from './step-option.interface';

@Injectable()
export class NgbTourService<T extends INgbStepOption = INgbStepOption> extends TourService<T> {}
