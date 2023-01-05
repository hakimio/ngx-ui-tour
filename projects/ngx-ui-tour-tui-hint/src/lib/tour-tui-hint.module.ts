import {NgModule} from '@angular/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';

const COMPONENTS = [TourStepTemplateComponent, TourAnchorTuiHintDirective];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourTuiHintModule {}
