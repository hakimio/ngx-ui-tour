import type {Routes} from '@angular/router';
import {PrimeNgPopoverComponent} from './prime-ng-popover.component';
import {provideUiTour} from 'ngx-ui-tour-primeng';

export default [{
    path: '',
    component: PrimeNgPopoverComponent,
    children: [{
        path: 'Setup',
        component: PrimeNgPopoverComponent
    }, {
        path: 'API',
        component: PrimeNgPopoverComponent
    }, {
        path: 'FAQ',
        component: PrimeNgPopoverComponent
    }, {
        path: 'Misc',
        component: PrimeNgPopoverComponent
    }],
    providers: [
        provideUiTour({
            route: 'prime-ng',
            delayAfterNavigation: 150
        })
    ]
}] satisfies Routes;
