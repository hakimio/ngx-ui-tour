import {type EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import type {ITuiHintStepOption} from './step-option.interface';
import {UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
import {TourTuiHintService} from './tour-tui-hint.service';
import {TourStepTemplateService} from './tour-step-template.service';

export function provideUiTour(
    config: ITuiHintStepOption = {}
): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: UI_TOUR_OPTIONS,
            useValue: config
        },
        TourTuiHintService,
        TourStepTemplateService
    ]);
}
