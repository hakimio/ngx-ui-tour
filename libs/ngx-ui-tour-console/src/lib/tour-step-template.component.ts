import {Component, inject} from '@angular/core';
import {TourHotkeyListenerComponent, TourService} from 'ngx-ui-tour-core';

@Component({
    selector: 'tour-step-template',
    template: ''
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent {

    protected override tourService = inject(TourService);

}
