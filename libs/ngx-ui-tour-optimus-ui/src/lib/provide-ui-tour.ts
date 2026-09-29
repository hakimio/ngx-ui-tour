import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import type {OptimusUiStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {OptimusUiTourService} from './optimus-ui-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';


export function provideUiTour(
    config: OptimusUiStepOption = {}
): EnvironmentProviders {
    const options: OptimusUiStepOption = {
        closeOnOutsideClick: false,
        ...config
    };

    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: options
        },
        OptimusUiTourService,
        TourStepTemplateService
    ]);
}
