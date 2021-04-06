import { Injectable } from '@angular/core';
import { TourService } from 'ngx-ui-tour-core';

import { INgxpStepOption } from './step-option.interface';

@Injectable()
export class NgxpTourService extends TourService<INgxpStepOption> {}
