import {NgModule} from '@angular/core';
import {TourModule} from 'ngx-ui-tour-core';
import {CommonModule} from '@angular/common';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@NgModule({
    imports: [
        CommonModule,
        TourModule,
        TuiHintModule,
        TuiButtonModule
    ],
    declarations: [
        TourStepTemplateComponent,
        TourAnchorTuiHintDirective,
        TourAnchorOpenerComponent
    ],
    exports: [
        TourStepTemplateComponent,
        TourAnchorTuiHintDirective
    ]
})
export class TourTuiHintModule {}
