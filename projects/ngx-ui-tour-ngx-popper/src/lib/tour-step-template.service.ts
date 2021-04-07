import { Injectable } from '@angular/core';
import { NgxPopperjsContentComponent } from 'ngx-popperjs';
import { TourStepTemplateComponent } from './tour-step-template.component';

@Injectable()
export class TourStepTemplateService {
  public template: NgxPopperjsContentComponent;
  public templateComponent: TourStepTemplateComponent;
}
