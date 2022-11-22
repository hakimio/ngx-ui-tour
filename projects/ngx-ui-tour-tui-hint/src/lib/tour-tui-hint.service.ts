import {Injectable} from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-core';
import {ITuiHintStepOption} from './step-option.interface';

@Injectable()
export class TourTuiHintService<T extends IStepOption = ITuiHintStepOption> extends TourService<T> {}
