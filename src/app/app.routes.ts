import {Routes} from '@angular/router';

export const ROUTES: Routes = [{
    loadChildren: () => import('./ng-bootstrap/ng-bootstrap.routes'),
    path: 'ng-bootstrap',
    data: {
        title: 'NG Bootstrap',
    }
}, {
    loadChildren: () => import('./ngx-bootstrap/ngx-bootstrap.routes'),
    path: 'ngx-bootstrap',
    data: {
        title: 'Ngx Bootstrap',
    }
}, {
    loadChildren: () => import('./console/console.routes'),
    path: 'console',
    data: {
        title: 'Console'
    }
}, {
    loadChildren: () => import('./md-menu/md-menu.routes'),
    path: 'md-menu',
    data: {
        title: 'Material Design'
    }
}, {
    loadChildren: () => import('./tui-dropdown/tui-dropdown.routes'),
    path: 'tui-dropdown',
    data: {
        title: 'Taiga UI Dropdown'
    }
}, {
    loadChildren: () => import('./tui-hint/tui-hint.routes'),
    path: 'tui-hint',
    data: {
        title: 'Taiga UI Hint'
    }
}, {
    loadChildren: () => import('./ion-popover/ion-popover.routes'),
    path: 'ion-popover',
    data: {
        title: 'Ionic'
    }
}, {
    redirectTo: 'md-menu',
    path: '**'
}];
