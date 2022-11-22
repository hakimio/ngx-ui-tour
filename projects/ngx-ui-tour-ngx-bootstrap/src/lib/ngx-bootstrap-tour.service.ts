import { Injectable } from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-core';

import { INgxbStepOption } from './step-option.interface';

@Injectable()
export class NgxbTourService<T extends IStepOption = INgxbStepOption> extends TourService<T> {}
