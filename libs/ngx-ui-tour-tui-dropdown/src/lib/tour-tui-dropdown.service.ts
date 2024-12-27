import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import {ITuiDdStepOption} from './step-option.interface';

@Injectable({
    providedIn: 'root'
})
export class TourTuiDropdownService<T extends ITuiDdStepOption = ITuiDdStepOption> extends TourService<T> {}
