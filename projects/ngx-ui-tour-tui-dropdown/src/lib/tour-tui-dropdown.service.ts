import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import {ITuiDdStepOption} from './step-option.interface';

@Injectable()
export class TourTuiDropdownService extends TourService<ITuiDdStepOption> {}
