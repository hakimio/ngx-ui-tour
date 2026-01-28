import type {Routes} from '@angular/router';
import {IonPopoverComponent} from './ion-popover.component';
import {provideUiTour} from 'ngx-ui-tour-ionic';

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
        })
    ]
}] satisfies Routes;
