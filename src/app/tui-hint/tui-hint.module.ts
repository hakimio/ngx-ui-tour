import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TuiHintComponent} from './tui-hint.component';
import {RouterModule} from '@angular/router';
import {tuiGenerateRoutes, TuiDocDocumentationModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {SharedModule} from '../shared/shared.module';
import {TourTuiHintModule, TourAnchorTuiHintDirective} from 'ngx-ui-tour-tui-hint';


@NgModule({
    declarations: [
        TuiHintComponent
    ],
    imports: [
        CommonModule,
        TourTuiHintModule,
        RouterModule.forChild(tuiGenerateRoutes(TuiHintComponent)),
        TuiDocPageModule,
        TuiDocDocumentationModule,
        TuiLinkModule,
        TuiButtonModule,
        SharedModule.withAnchorDirectiveType(TourAnchorTuiHintDirective),
        TuiNotificationModule
    ]
})
export class TuiHintModule {}
