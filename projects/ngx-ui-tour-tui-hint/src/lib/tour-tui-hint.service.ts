import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import {ITuiHintStepOption} from './step-option.interface';

@Injectable()
export class TourTuiHintService<T = ITuiHintStepOption> extends TourService<T> {}
