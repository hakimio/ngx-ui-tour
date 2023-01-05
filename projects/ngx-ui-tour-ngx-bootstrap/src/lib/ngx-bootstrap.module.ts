import {NgModule} from '@angular/core';

import {TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template.component';

const COMPONENTS = [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourNgxBootstrapModule {}
