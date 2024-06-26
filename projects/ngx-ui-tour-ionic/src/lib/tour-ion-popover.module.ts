import {NgModule} from '@angular/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorIonPopoverDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';


const COMPONENTS = [TourStepTemplateComponent, TourAnchorIonPopoverDirective, TourProxyAnchorComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourIonPopoverModule {}
