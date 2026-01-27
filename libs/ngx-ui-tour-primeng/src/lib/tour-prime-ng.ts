import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorPrimeNgDirective} from './tour-anchor.directive';
import {TourProxyAnchorComponent} from './tour-proxy-anchor.component';

export const TourPrimeNg = [
    TourStepTemplateComponent,
    TourAnchorPrimeNgDirective,
    TourProxyAnchorComponent
] as const;
