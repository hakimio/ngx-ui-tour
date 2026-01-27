import {TourAnchorNgBootstrapDirective} from './tour-anchor.directive';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourNgBootstrap = [
    TourAnchorNgBootstrapDirective, TourStepTemplateComponent, TourProxyAnchorComponent
] as const;
