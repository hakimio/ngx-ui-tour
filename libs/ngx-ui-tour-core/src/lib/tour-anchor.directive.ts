import type {ElementRef} from '@angular/core';
import type {IStepOption} from './tour.service';

export interface TourAnchorDirective {
  showTourStep(step: IStepOption): void | Promise<void>;
  hideTourStep(): void | Promise<void>;
  element: ElementRef;
}
