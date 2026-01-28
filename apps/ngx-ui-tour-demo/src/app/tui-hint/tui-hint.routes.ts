import type {Routes} from '@angular/router';
import {TuiHintComponent} from './tui-hint.component';
import {provideUiTour} from 'ngx-ui-tour-tui-hint';

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
        })
    ]
}] satisfies Routes;
