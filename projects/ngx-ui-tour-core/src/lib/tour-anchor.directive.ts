import { ElementRef } from '@angular/core';
import { IStepOption } from './tour.service';

export interface TourAnchorDirective {
  showTourStep(step: IStepOption): void;
  hideTourStep(): void;
  element: ElementRef;
  getIsScrollingEnabled?(): boolean;
}
