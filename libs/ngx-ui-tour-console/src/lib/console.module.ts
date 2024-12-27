import {NgModule} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';

import {TourAnchorConsoleDirective} from './tour-anchor.directive';

const COMPONENTS = [TourAnchorConsoleDirective, TourHotkeyListenerComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourConsoleModule {}
