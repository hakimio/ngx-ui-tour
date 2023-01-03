import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourStepTemplateService {
  public template: TemplateRef<{content: string}>;
}
