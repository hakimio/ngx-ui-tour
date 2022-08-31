import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TourAnchorConsoleDirective, TourConsoleModule} from 'ngx-ui-tour-console';

import {ConsoleComponent} from './console.component';
import {tuiGenerateRoutes, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {SharedModule} from '../shared/shared.module';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';

@NgModule({
    declarations: [ConsoleComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(tuiGenerateRoutes(ConsoleComponent)),
        TourConsoleModule.forRoot(),
        SharedModule.withAnchorDirectiveType(TourAnchorConsoleDirective),
        TuiDocPageModule,
        TuiLinkModule,
        TuiButtonModule
    ]
})
export class ConsoleModule {}
