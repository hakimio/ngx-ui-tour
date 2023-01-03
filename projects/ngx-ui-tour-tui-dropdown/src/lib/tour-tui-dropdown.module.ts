import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiDropdownDirective} from './tour-anchor.directive';
import {TourModule} from 'ngx-ui-tour-core';
import {TuiButtonModule, TuiDropdownModule} from '@taiga-ui/core';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@NgModule({
    declarations: [
        TourStepTemplateComponent,
        TourAnchorTuiDropdownDirective,
        TourAnchorOpenerComponent
    ],
    exports: [
        TourStepTemplateComponent,
        TourAnchorTuiDropdownDirective
    ],
    imports: [
        CommonModule,
        TourModule,
        TuiDropdownModule,
        TuiButtonModule
    ]
})
export class TourTuiDropdownModule {}
