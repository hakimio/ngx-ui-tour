import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorNgZorroDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourNgZorro = [
    TourStepTemplateComponent,
    TourAnchorNgZorroDirective,
    TourProxyAnchorComponent
] as const;
