import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiDropdownDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourTuiDropdown = [
    TourStepTemplateComponent, TourAnchorTuiDropdownDirective, TourProxyAnchorComponent
] as const;
