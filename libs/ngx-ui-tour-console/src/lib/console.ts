import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';

import {TourAnchorConsoleDirective} from './tour-anchor.directive';

export const TourConsole = [
    TourAnchorConsoleDirective,
    TourHotkeyListenerComponent
] as const;
