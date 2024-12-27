import {Routes} from '@angular/router';
import {tuiProvideRoutePageTab as route} from '@taiga-ui/addon-doc';

export const ROUTES: Routes = [
    route({
        path: 'ng-bootstrap',
        title: 'NG Bootstrap',
        loadComponent: async () => import('./ng-bootstrap/ng-bootstrap.component')
    }),
    route({
        path: 'ngx-bootstrap',
        title: 'Ngx Bootstrap',
        loadComponent: async () => import('./ngx-bootstrap/ngx-bootstrap.component')
    }),
    route({
        path: 'console',
        title: 'Console',
        loadComponent: async () => import('./console/console.component')
    }),
    route({
        path: 'md-menu',
        title: 'Material Design',
        loadComponent: async () => import('./md-menu/md-menu.component')
    }),
    route({
        path: 'tui-dropdown',
        title: 'Taiga UI Dropdown',
        loadComponent: async () => import('./tui-dropdown/tui-dropdown.component')
    }),
    route({
        path: 'tui-hint',
        title: 'Taiga UI Hint',
        loadComponent: async () => import('./tui-hint/tui-hint.component')
    }),
    route({
        path: 'ion-popover',
        title: 'Ionic',
        loadComponent: async () => import('./ion-popover/ion-popover.component')
    }),
    {
        redirectTo: 'md-menu',
        path: '**'
    }
];
