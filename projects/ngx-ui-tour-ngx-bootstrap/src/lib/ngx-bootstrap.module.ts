import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {TourService, TourModule, TourBackdropService} from 'ngx-ui-tour-core';

import { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxbTourService } from './ngx-bootstrap-tour.service';

export { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent, NgxbTourService };
export const popoverForRoot: ModuleWithProviders<PopoverModule> = PopoverModule.forRoot();

@NgModule({
  declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
  imports: [CommonModule, popoverForRoot, TourModule]
})
export class TourNgxBootstrapModule {
  public static forRoot(): ModuleWithProviders<TourNgxBootstrapModule> {
    return {
      ngModule: TourNgxBootstrapModule,
      providers: [
        TourStepTemplateService,
        TourService,
        NgxbTourService,
        TourBackdropService
      ]
    };
  }
}
