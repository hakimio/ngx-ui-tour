import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleBRoutingModule} from './module-b-routing.module';
import {ModuleBComponent} from './module-b.component';

import {TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';

@NgModule({
    imports: [
        CommonModule,
        ModuleBRoutingModule,
        TourAnchorMatMenuDirective
    ],
    declarations: [ModuleBComponent]
})
export class ModuleBModule {}
