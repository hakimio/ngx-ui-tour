import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorPrimeNgDirective} from './tour-anchor.directive';
import {NgModule} from '@angular/core';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

const COMPONENTS = [TourStepTemplateComponent, TourAnchorPrimeNgDirective, TourProxyAnchorComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourPrimeNgModule {}
