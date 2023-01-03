import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import {ITuiHintStepOption} from './step-option.interface';

@Injectable({
    providedIn: 'root'
})
export class TourTuiHintService<T extends ITuiHintStepOption = ITuiHintStepOption> extends TourService<T> {}
