import type {Routes} from '@angular/router';
import {tuiProvideRoutePageTab as route} from '@taiga-ui/addon-doc';

export const ROUTES: Routes = [
    route({
        path: 'ng-bootstrap',
        title: 'NG Bootstrap',
        loadChildren: () => import('./ng-bootstrap/ng-bootstrap.routes')
    }),
    route({
        path: 'console',
        title: 'Console',
        loadChildren: () => import('./console/console.routes')
    }),
    route({
        path: 'md-menu',
        title: 'Material Design',
        loadChildren: () => import('./md-menu/md-menu.routes')
    }),
    route({
        path: 'tui-dropdown',
        title: 'Taiga UI Dropdown',
        loadChildren: () => import('./tui-dropdown/tui-dropdown.routes')
    }),
    route({
        path: 'tui-hint',
        title: 'Taiga UI Hint',
        loadChildren: () => import('./tui-hint/tui-hint.routes')
    }),
    route({
        path: 'ion-popover',
        title: 'Ionic',
        loadChildren: () => import('./ion-popover/ion-popover.routes')
    }),
    route({
        path: 'prime-ng',
        title: 'PrimeNG',
        loadChildren: () => import('./prime-ng-popover/prime-ng-popover.routes')
    }),
    {
        redirectTo: 'md-menu',
        path: '**'
    }
];
