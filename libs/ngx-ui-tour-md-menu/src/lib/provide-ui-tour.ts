import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import type {IMdStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';


export function provideUiTour(
    config: IMdStepOption = {}
): EnvironmentProviders {
    const options: IMdStepOption = {
        showArrow: true,
        ...config
    };

    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: options
        },
        NgxmTourService,
        TourStepTemplateService
    ]);
}
