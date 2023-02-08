import {IonStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';
import {inject, Injectable} from '@angular/core';
import {Config} from '@ionic/angular';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class IonTourService<T extends IonStepOption = IonStepOption> extends TourService<T> {

    private readonly config = inject(Config);
    private readonly document = inject(DOCUMENT);

    public initialize(steps: T[], stepDefaults?: T) {
        const isIOS = this.config.get('mode') === 'ios',
            ionContent = this.document.documentElement.querySelector('ion-content'),
            scrollContainer = ionContent?.shadowRoot.querySelector('[part=scroll]') as HTMLElement;

        stepDefaults ??= {} as T;
        stepDefaults.backdropConfig ??= {};
        stepDefaults.backdropConfig.parentContainer ??= 'ion-app';
        stepDefaults.delayAfterNavigation ??= isIOS ? 700: 500;
        stepDefaults.scrollContainer ??= scrollContainer;

        super.initialize(steps, stepDefaults);
    }

}
