import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import {type IStepOption, TourService, UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';

export function provideUiTour(
    config: IStepOption = {}
): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: config
        },
        TourService
    ]);
}
