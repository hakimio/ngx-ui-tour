import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TourTuiDropdownModule, TourAnchorTuiDropdownDirective} from 'ngx-ui-tour-tui-dropdown';
import {TuiDropdownComponent} from './tui-dropdown.component';
import {tuiGenerateRoutes, TuiDocDocumentationModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {RouterModule} from '@angular/router';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        TuiDropdownComponent
    ],
    imports: [
        CommonModule,
        TourTuiDropdownModule,
        RouterModule.forChild(tuiGenerateRoutes(TuiDropdownComponent)),
        TuiDocPageModule,
        TuiDocDocumentationModule,
        TuiLinkModule,
        TuiButtonModule,
        SharedModule.withAnchorDirectiveType(TourAnchorTuiDropdownDirective),
        TuiNotificationModule
    ]
})
export class TuiDropdownModule {}
