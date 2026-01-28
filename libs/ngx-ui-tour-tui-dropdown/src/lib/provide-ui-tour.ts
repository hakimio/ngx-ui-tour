import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import type {ITuiDdStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {TourTuiDropdownService} from './tour-tui-dropdown.service';
import {TourStepTemplateService} from './tour-step-template.service';

export function provideUiTour(
    config: ITuiDdStepOption = {}
): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: config
        },
        TourTuiDropdownService,
        TourStepTemplateService
    ]);
}
