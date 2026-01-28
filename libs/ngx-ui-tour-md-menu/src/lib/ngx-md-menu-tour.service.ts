import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import type {IMdStepOption} from './step-option.interface';

@Injectable()
export class NgxmTourService<T extends IMdStepOption = IMdStepOption> extends TourService<T> {}
