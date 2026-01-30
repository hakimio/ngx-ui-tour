import type {Routes} from '@angular/router';
import {MdMenuComponent} from './md-menu.component';
import {provideUiTour, TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: MdMenuComponent,
    children: [{
        path: 'Setup',
        component: MdMenuComponent
    }, {
        path: 'API',
        component: MdMenuComponent
    }, {
        path: 'FAQ',
        component: MdMenuComponent
    }, {
        path: 'Misc',
        component: MdMenuComponent
    }],
    providers: [
        provideUiTour({
            route: 'md-menu',
            delayAfterNavigation: 150
        }),
        provideTourDirective(TourAnchorMatMenuDirective)
    ]
}] satisfies Routes;
