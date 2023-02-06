import {IonStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';
import {inject, Injectable} from '@angular/core';
import {Config} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class IonTourService<T extends IonStepOption = IonStepOption> extends TourService<T> {

    private readonly config = inject(Config);

    public initialize(steps: T[], stepDefaults?: T) {
        const isIOS = this.config.get('mode') === 'ios';

        stepDefaults ??= {} as T;
        stepDefaults.backdropConfig ??= {};
        stepDefaults.backdropConfig.parentContainer ??= 'ion-app';
        stepDefaults.delayAfterNavigation ??= isIOS ? 700: 500;

        super.initialize(steps, stepDefaults);
    }

}
