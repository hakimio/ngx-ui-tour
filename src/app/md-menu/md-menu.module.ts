import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TourMatMenuModule, TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';
import {MdMenuComponent} from './md-menu.component';
import {generateRoutes, TuiDocDocumentationModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [MdMenuComponent],
    imports: [
        CommonModule,
        TourMatMenuModule.forRoot(),
        RouterModule.forChild(generateRoutes(MdMenuComponent)),
        TuiDocPageModule,
        TuiDocDocumentationModule,
        TuiLinkModule,
        TuiButtonModule,
        SharedModule.withAnchorDirectiveType(TourAnchorMatMenuDirective)
    ]
})
export class MdMenuModule {}
