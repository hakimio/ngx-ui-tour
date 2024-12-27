import {Injectable, TemplateRef} from '@angular/core';
import {IStepOption} from 'ngx-ui-tour-core';

@Injectable({
  providedIn: 'root'
})
export class TourStepTemplateService {
  public template: TemplateRef<{ step: IStepOption }>;
}
