import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorOptimusUiDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourOptimusUi = [
    TourStepTemplateComponent,
    TourAnchorOptimusUiDirective,
    TourProxyAnchorComponent
] as const;
