import {NgModule} from '@angular/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiDropdownDirective} from './tour-anchor.directive';

const COMPONENTS = [TourStepTemplateComponent, TourAnchorTuiDropdownDirective];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourTuiDropdownModule {}
