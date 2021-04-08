import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgBootstrapModule } from 'ngx-ui-tour-ng-bootstrap';

import { DocsComponent } from './docs.component';
import { NgBootstrapComponent } from './ng-bootstrap.component';
import { OtherRouteComponent } from './other-route.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NgBootstrapComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: NgBootstrapComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
    TourNgBootstrapModule.forRoot(),
    SharedModule
  ],
})
export class NgBootstrapModule { }
