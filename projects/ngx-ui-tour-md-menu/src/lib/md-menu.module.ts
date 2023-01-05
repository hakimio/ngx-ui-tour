import {NgModule} from '@angular/core';
import {TourAnchorMatMenuDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';

const COMPONENTS = [TourAnchorMatMenuDirective, TourStepTemplateComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class TourMatMenuModule {}
