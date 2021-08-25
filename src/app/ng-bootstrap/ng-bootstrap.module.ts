import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TourNgBootstrapModule} from 'ngx-ui-tour-ng-bootstrap';

import {NgBootstrapComponent} from './ng-bootstrap.component';
import {generateRoutes, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TourAnchorNgBootstrapDirective} from 'ngx-ui-tour-ng-bootstrap';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [NgBootstrapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(generateRoutes(NgBootstrapComponent)),
        TourNgBootstrapModule.forRoot(),
        TuiDocPageModule,
        TuiLinkModule,
        TuiButtonModule,
        SharedModule.withAnchorDirectiveType(TourAnchorNgBootstrapDirective)
    ]
})
export class NgBootstrapModule {}
