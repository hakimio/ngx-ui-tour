import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPopperjsModule } from 'ngx-popperjs';
import {TourService} from 'ngx-ui-tour-core';

import { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxpTourService } from './ngx-popper-tour.service';

export { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent, NgxpTourService };

@NgModule({
  declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
  // FIXME: should be NgxPopperjsModule.forRoot() but that causes "Function calls are not supported in decorators" error
  // See https://github.com/tonysamperi/ngx-popperjs/issues/5 for more info
  imports: [CommonModule, NgxPopperjsModule],
})
export class TourNgxPopperModule {
  public static forRoot(): ModuleWithProviders<TourNgxPopperModule> {
    return {
      ngModule: TourNgxPopperModule,
      providers: [
        TourStepTemplateService,
        TourService,
        NgxpTourService,
      ],
    };
  }
}
