import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {TourHotkeyListenerComponent, TourModule} from 'ngx-ui-tour-core';

import {TourAnchorConsoleDirective} from './tour-anchor.directive';

@NgModule({
  declarations: [TourAnchorConsoleDirective],
  exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
  imports: [TourModule, CommonModule, NgbPopoverModule],
})
export class TourConsoleModule {}
