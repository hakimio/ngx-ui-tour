import {Injectable} from '@angular/core';
import type {NgZorroStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';

@Injectable()
export class NgZorroTourService<T extends NgZorroStepOption = NgZorroStepOption> extends TourService<T> {
}
