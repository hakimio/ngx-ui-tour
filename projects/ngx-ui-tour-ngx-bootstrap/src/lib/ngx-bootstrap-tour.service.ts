import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';

import {INgxbStepOption} from './step-option.interface';

@Injectable({
    providedIn: 'root'
})
export class NgxbTourService<T extends INgxbStepOption = INgxbStepOption> extends TourService<T> {}
