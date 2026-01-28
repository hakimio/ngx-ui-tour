import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import type {PrimeNgStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {PrimeNgTourService} from './prime-ng-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';


export function provideUiTour(
    config: PrimeNgStepOption = {}
): EnvironmentProviders {
    const options: PrimeNgStepOption = {
        closeOnOutsideClick: false,
        ...config
    };

    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: options
        },
        PrimeNgTourService,
        TourStepTemplateService
    ]);
}
