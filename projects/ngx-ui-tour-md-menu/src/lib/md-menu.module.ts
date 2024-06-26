import {NgModule} from '@angular/core';
import {TourAnchorMatMenuDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

const COMPONENTS = [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourProxyAnchorComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourMatMenuModule {}
