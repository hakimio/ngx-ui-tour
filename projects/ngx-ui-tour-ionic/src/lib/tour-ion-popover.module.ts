import {NgModule} from '@angular/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorIonPopoverDirective} from './tour-anchor.directive';


const COMPONENTS = [TourStepTemplateComponent, TourAnchorIonPopoverDirective];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourIonPopoverModule {}
