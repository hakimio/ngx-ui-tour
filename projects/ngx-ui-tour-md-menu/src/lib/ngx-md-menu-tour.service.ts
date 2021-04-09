import {Injectable} from '@angular/core';
import {TourService, IStepOption} from 'ngx-ui-tour-core';

@Injectable()
export class NgxmTourService extends TourService<IStepOption> {}
