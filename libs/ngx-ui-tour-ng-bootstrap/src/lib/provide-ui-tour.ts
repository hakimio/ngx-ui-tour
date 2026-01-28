import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import type {INgbStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {NgbTourService} from './ng-bootstrap-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';


export function provideUiTour(
    config: INgbStepOption = {}
): EnvironmentProviders {
    const options: INgbStepOption = {
        useLegacyTitle: false,
        placement: 'auto',
        ...config
    };

    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: options
        },
        NgbTourService,
        TourStepTemplateService
    ]);
}
