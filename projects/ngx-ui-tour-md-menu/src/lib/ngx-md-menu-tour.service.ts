import {Injectable} from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-core';
import {IMdStepOption} from './step-option.interface';

@Injectable()
export class NgxmTourService<T extends IStepOption = IMdStepOption> extends TourService<T> {}
