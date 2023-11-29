import {Injectable} from '@angular/core';
import {TourService} from 'ngx-ui-tour-core';
import {IMdStepOption} from './step-option.interface';

@Injectable({
    providedIn: 'root'
})
export class NgxmTourService<T extends IMdStepOption = IMdStepOption> extends TourService<T> {

    public override initialize(steps: T[], stepDefaults?: T) {
        stepDefaults ??= {} as T;
        stepDefaults.showArrow ??= true;

        super.initialize(steps, stepDefaults);
    }

}
