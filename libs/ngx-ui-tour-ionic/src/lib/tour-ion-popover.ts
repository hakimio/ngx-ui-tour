import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorIonPopoverDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourIonPopover = [
    TourStepTemplateComponent, TourAnchorIonPopoverDirective, TourProxyAnchorComponent
] as const;
