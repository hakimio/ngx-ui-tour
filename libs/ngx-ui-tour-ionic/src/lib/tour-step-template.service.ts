import {Injectable} from '@angular/core';
import type {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';

@Injectable()
export class TourStepTemplateService {
    public templateComponent: TourStepTemplateComponent;
}
