import {NgModule} from '@angular/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

const COMPONENTS = [TourStepTemplateComponent, TourAnchorTuiHintDirective, TourProxyAnchorComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourTuiHintModule {}
