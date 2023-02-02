import {NgModule} from '@angular/core';
import {TourAnchorNgBootstrapDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template.component';

const COMPONENTS = [TourAnchorNgBootstrapDirective, TourStepTemplateComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourNgBootstrapModule {}
