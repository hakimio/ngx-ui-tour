import type {Routes} from '@angular/router';
import {NgBootstrapComponent} from './ng-bootstrap.component';
import {provideUiTour} from 'ngx-ui-tour-ng-bootstrap';

export default [{
    path: '',
    component: NgBootstrapComponent,
    children: [{
        path: 'Setup',
        component: NgBootstrapComponent
    }, {
        path: 'API',
        component: NgBootstrapComponent
    }, {
        path: 'FAQ',
        component: NgBootstrapComponent
    }, {
        path: 'Misc',
        component: NgBootstrapComponent
    }],
    providers: [
        provideUiTour({
            route: 'ng-bootstrap',
            delayAfterNavigation: 150
        })
    ]
}] satisfies Routes;
