import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TourAnchorNgxBootstrapDirective, TourNgxBootstrapModule} from 'ngx-ui-tour-ngx-bootstrap';

import {NgxBootstrapComponent} from './ngx-bootstrap.component';
import {tuiGenerateRoutes, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {SharedModule} from '../shared/shared.module';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';

@NgModule({
    declarations: [NgxBootstrapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(tuiGenerateRoutes(NgxBootstrapComponent)),
        TourNgxBootstrapModule,
        SharedModule.withAnchorDirectiveType(TourAnchorNgxBootstrapDirective),
        TuiButtonModule,
        TuiLinkModule,
        TuiDocPageModule
    ]
})
export class NgxBootstrapModule {}
