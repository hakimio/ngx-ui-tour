import type {NgZorroStepOption} from './step-option.interface';
import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {NgZorroTourService} from './ng-zorro-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';

export function provideUiTour(
    config: NgZorroStepOption = {}
): EnvironmentProviders {
    const options: NgZorroStepOption = {
        placement: 'bottomLeft',
        closeOnOutsideClick: false,
        ...config
    };

    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: options
        },
        NgZorroTourService,
        TourStepTemplateService
    ]);
}
