import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {TourModule} from 'ngx-ui-tour-core';
import {TourAnchorMatMenuDirective} from './tour-anchor.directive';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';

export {
    TourAnchorMatMenuDirective,
    TourStepTemplateComponent,
    NgxmTourService
};

@NgModule({
    declarations: [
        TourAnchorMatMenuDirective,
        TourStepTemplateComponent,
        TourAnchorOpenerComponent
    ],
    exports: [
        TourAnchorMatMenuDirective,
        TourStepTemplateComponent,
        TourModule
    ],
    imports: [
        CommonModule,
        TourModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class TourMatMenuModule {}
