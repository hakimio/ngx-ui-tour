import type {Routes} from '@angular/router';
import {TuiDropdownComponent} from './tui-dropdown.component';
import {provideUiTour} from 'ngx-ui-tour-tui-dropdown';

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
        })
    ]
}] satisfies Routes;
