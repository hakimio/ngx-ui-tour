import {TourAnchorMatMenuDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourMatMenu = [
    TourAnchorMatMenuDirective, TourStepTemplateComponent, TourProxyAnchorComponent
] as const;
