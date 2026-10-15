export * from './lib/tour-step-template/tour-step-template.component';
export * from './lib/tour-optimus-ui';
export * from './lib/tour-anchor.directive';
export * from './lib/tour-proxy-anchor.component';

export {OptimusUiStepOption as IStepOption} from './lib/step-option.interface';
export {StepDimensions, Direction, TourState, StepChangeParams, UI_TOUR_OPTIONS} from 'ngx-ui-tour-core';
export {OptimusUiTourService as TourService} from './lib/optimus-ui-tour.service';
export {provideUiTour} from './lib/provide-ui-tour';
