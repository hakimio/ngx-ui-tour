import type {Routes} from '@angular/router';
import {TuiHintComponent} from './tui-hint.component';
import {provideUiTour, TourAnchorTuiHintDirective} from 'ngx-ui-tour-tui-hint';
import {provideTourDirective} from '../shared';

export default [{
    path: '',
    component: TuiHintComponent,
    children: [{
        path: 'Setup',
        component: TuiHintComponent
    }, {
        path: 'API',
        component: TuiHintComponent
    }, {
        path: 'FAQ',
        component: TuiHintComponent
    }, {
        path: 'Misc',
        component: TuiHintComponent
    }],
    providers: [
        provideUiTour({
            route: 'tui-hint',
            delayAfterNavigation: 150
        }),
        provideTourDirective(TourAnchorTuiHintDirective)
    ]
}] satisfies Routes;
