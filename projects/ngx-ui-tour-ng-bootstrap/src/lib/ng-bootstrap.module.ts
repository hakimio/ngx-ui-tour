import {NgModule} from '@angular/core';
import {TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template.component';

const COMPONENTS = [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourNgBootstrapModule {}
