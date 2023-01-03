/*
 * Public API Surface of ngx-ui-tour-ngx-bootstrap
 */

export {INgxbStepOption as IStepOption} from './lib/step-option.interface';
export {
    NgxbTourService as TourService
} from './lib/ngx-bootstrap-tour.service';
export * from './lib/ngx-bootstrap.module';
export {TourStepTemplateComponent} from './lib/tour-step-template.component';
export {TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective} from './lib/tour-anchor.directive';
