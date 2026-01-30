import type {Routes} from '@angular/router';
import {IonPopoverComponent} from './ion-popover.component';
import {provideUiTour, TourAnchorIonPopoverDirective} from 'ngx-ui-tour-ionic';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: IonPopoverComponent,
    children: [{
        path: 'Setup',
        component: IonPopoverComponent
    }, {
        path: 'API',
        component: IonPopoverComponent
    }, {
        path: 'FAQ',
        component: IonPopoverComponent
    }, {
        path: 'Misc',
        component: IonPopoverComponent
    }],
    providers: [
        provideUiTour({
            route: 'ion-popover',
            delayAfterNavigation: 150
        }),
        provideTourDirective(TourAnchorIonPopoverDirective)
    ]
}] satisfies Routes;
