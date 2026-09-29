import {Injectable} from '@angular/core';
import type {OptimusUiStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';

@Injectable()
export class OptimusUiTourService<T extends OptimusUiStepOption = OptimusUiStepOption> extends TourService<T> {
}
