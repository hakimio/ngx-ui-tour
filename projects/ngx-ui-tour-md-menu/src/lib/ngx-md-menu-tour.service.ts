import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import {IMdStepOption} from './step-option.interface';

@Injectable()
export class NgxmTourService<T = IMdStepOption> extends TourService<T> {}
