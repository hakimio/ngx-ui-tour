import { Injectable } from '@angular/core';
import { TourService } from 'ngx-ui-tour-core';

import { INgxbStepOption } from './step-option.interface';

@Injectable()
export class NgxbTourService<T = INgxbStepOption> extends TourService<T> {}
