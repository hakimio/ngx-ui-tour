import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {TourModule} from 'ngx-ui-tour-core';

import {TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template.component';

export const popoverForRoot: ModuleWithProviders<PopoverModule> = PopoverModule.forRoot();

@NgModule({
    declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
    exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
    imports: [CommonModule, popoverForRoot, TourModule]
})
export class TourNgxBootstrapModule {}
