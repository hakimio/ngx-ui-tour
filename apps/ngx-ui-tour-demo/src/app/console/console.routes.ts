import type {Routes} from '@angular/router';
import {ConsoleComponent} from './console.component';
import {provideUiTour, TourAnchorConsoleDirective} from 'ngx-ui-tour-console';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: ConsoleComponent,
    children: [{
        path: 'Setup',
        component: ConsoleComponent
    }, {
        path: 'API',
        component: ConsoleComponent
    }, {
        path: 'FAQ',
        component: ConsoleComponent
    }, {
        path: 'Misc',
        component: ConsoleComponent
    }],
    providers: [
        provideUiTour({
            route: 'console',
            delayAfterNavigation: 150
        }),
        provideTourDirective(TourAnchorConsoleDirective)
    ]
}] satisfies Routes;
