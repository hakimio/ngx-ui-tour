import {NgModule} from '@angular/core';
import {TourAnchorNgBootstrapDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

const COMPONENTS = [TourAnchorNgBootstrapDirective, TourStepTemplateComponent, TourProxyAnchorComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourNgBootstrapModule {}
