import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgxPopperModule } from 'ngx-ui-tour-ngx-popper';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { DocsComponent } from './docs.component';
import { NgxPopperComponent } from './ngx-popper.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgxPopperComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    NgxPopperjsModule,
    RouterModule.forChild([{
      component: NgxPopperComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
    TourNgxPopperModule.forRoot(),
  ],
})
export class NgxpPopperModule { }
