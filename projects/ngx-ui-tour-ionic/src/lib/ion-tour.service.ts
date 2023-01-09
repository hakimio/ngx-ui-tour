import {IonStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IonTourService<T extends IonStepOption = IonStepOption> extends TourService<T> {}
