import {Injectable} from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-core';
import {ITuiDdStepOption} from './step-option.interface';

@Injectable()
export class TourTuiDropdownService<T extends IStepOption = ITuiDdStepOption> extends TourService<T> {}
