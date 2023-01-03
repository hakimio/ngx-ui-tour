import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {TourModule} from 'ngx-ui-tour-core';
import {TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template.component';

@NgModule({
  declarations: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
  imports: [CommonModule, NgbPopoverModule, TourModule],
})
export class TourNgBootstrapModule {}
