import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

export const ROUTES = [{
    loadChildren: () => import('./ng-bootstrap/ng-bootstrap.module').then(m => m.NgBootstrapModule),
    path: 'ng-bootstrap',
    data: {
        title: 'NG Bootstrap',
    }
}, {
    loadChildren: () => import('./ngx-bootstrap/ngx-bootstrap.module').then(m => m.NgxBootstrapModule),
    path: 'ngx-bootstrap',
    data: {
        title: 'Ngx Bootstrap',
    }
}, {
    loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule),
    path: 'console',
    data: {
        title: 'Console'
    }
}, {
    loadChildren: () => import('./md-menu/md-menu.module').then(m => m.MdMenuModule),
    path: 'md-menu',
    data: {
        title: 'Material Design'
    }
}, {
    loadChildren: () => import('./tui-dropdown/tui-dropdown.module').then(m => m.TuiDropdownModule),
    path: 'tui-dropdown',
    data: {
        title: 'Taiga UI Dropdown'
    }
}, {
    redirectTo: 'md-menu',
    path: '**'
}];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            initialNavigation: 'enabled',
            scrollPositionRestoration: 'top',
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
