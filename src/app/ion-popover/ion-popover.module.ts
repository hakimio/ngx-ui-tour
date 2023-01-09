import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonPopoverComponent} from './ion-popover.component';
import {TourIonPopoverModule, TourAnchorIonPopoverDirective} from 'ngx-ui-tour-ionic';
import {RouterModule} from '@angular/router';
import {TuiDocDocumentationModule, TuiDocPageModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [IonPopoverComponent],
    imports: [
        CommonModule,
        TourIonPopoverModule,
        RouterModule.forChild(tuiGenerateRoutes(IonPopoverComponent)),
        TuiDocPageModule,
        TuiDocDocumentationModule,
        TuiLinkModule,
        TuiButtonModule,
        SharedModule.withAnchorDirectiveType(TourAnchorIonPopoverDirective)
    ]
})
export class IonPopoverModule {}
