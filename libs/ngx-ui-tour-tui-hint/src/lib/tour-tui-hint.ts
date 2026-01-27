import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourTuiHint = [
    TourStepTemplateComponent, TourAnchorTuiHintDirective, TourProxyAnchorComponent
] as const;
