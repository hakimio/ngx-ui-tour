import {type EnvironmentProviders, inject, makeEnvironmentProviders} from '@angular/core';
import type {IonStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {IonTourService} from './ion-tour.service';
import {Config} from '@ionic/angular/standalone';
import {TourStepTemplateService} from './tour-step-template.service';

export function provideUiTour(
    config: IonStepOption = {}
): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useFactory: () => {
                const ionicConfig = inject(Config),
                    isIOS = ionicConfig.get('mode') === 'ios';

                return {
                    trapFocus: false,
                    showArrow: isIOS,
                    delayAfterNavigation: isIOS ? 700: 500,
                    backdropConfig: {
                        parentContainer: 'ion-app',
                        ...config.backdropConfig
                    },
                    ...config
                } as IonStepOption;
            }
        },
        IonTourService,
        TourStepTemplateService
    ]);
}
