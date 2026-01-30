import type {Routes} from '@angular/router';
import {TuiDropdownComponent} from './tui-dropdown.component';
import {provideUiTour, TourAnchorTuiDropdownDirective} from 'ngx-ui-tour-tui-dropdown';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: TuiDropdownComponent,
    children: [{
        path: 'Setup',
        component: TuiDropdownComponent
    }, {
        path: 'API',
        component: TuiDropdownComponent
    }, {
        path: 'FAQ',
        component: TuiDropdownComponent
    }, {
        path: 'Misc',
        component: TuiDropdownComponent
    }],
    providers: [
        provideUiTour({
            route: 'tui-dropdown',
            delayAfterNavigation: 150,
            disablePageScrolling: false
        }),
        provideTourDirective(TourAnchorTuiDropdownDirective)
    ]
}] satisfies Routes;
