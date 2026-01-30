import type {Routes} from '@angular/router';
import {NgZorroComponent} from './ng-zorro.component';
import {provideUiTour, TourAnchorNgZorroDirective} from 'ngx-ui-tour-ng-zorro';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: NgZorroComponent,
    children: [{
        path: 'Setup',
        component: NgZorroComponent
    }, {
        path: 'API',
        component: NgZorroComponent
    }, {
        path: 'FAQ',
        component: NgZorroComponent
    }, {
        path: 'Misc',
        component: NgZorroComponent
    }],
    providers: [
        provideUiTour({
            route: 'ng-zorro',
            delayAfterNavigation: 150
        }),
        provideTourDirective(TourAnchorNgZorroDirective)
    ]
}] satisfies Routes;
