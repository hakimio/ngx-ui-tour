import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TourHotkeyListenerComponent} from './tour-hotkey-listener.component';

@NgModule({
    declarations: [TourHotkeyListenerComponent],
    exports: [TourHotkeyListenerComponent],
    imports: [CommonModule, RouterModule]
})
export class TourModule {}
