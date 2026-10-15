import type {Routes} from '@angular/router';
import {OptimusUiPopoverComponent} from './optimus-ui-popover.component';
import {provideUiTour, TourAnchorOptimusUiDirective} from 'ngx-ui-tour-optimus-ui';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: OptimusUiPopoverComponent,
    children: [{
        path: 'Setup',
        component: OptimusUiPopoverComponent
    }, {
        path: 'API',
        component: OptimusUiPopoverComponent
    }, {
        path: 'FAQ',
        component: OptimusUiPopoverComponent
    }, {
        path: 'Misc',
        component: OptimusUiPopoverComponent
    }],
    providers: [
        provideUiTour({
            route: 'optimus-ui',
            delayAfterNavigation: 150
        }),
        provideTourDirective(TourAnchorOptimusUiDirective)
    ]
}] satisfies Routes;
