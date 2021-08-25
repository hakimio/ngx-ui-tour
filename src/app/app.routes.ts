import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

export const ROUTES = [{
    loadChildren: () => import('./ng-bootstrap/ng-bootstrap.module').then(m => m.NgBootstrapModule),
    path: 'ng-bootstrap',
    data: {
        title: 'NgBootstrap',
    }
}, {
    loadChildren: () => import('./ngx-bootstrap/ngx-bootstrap.module').then(m => m.NgxBootstrapModule),
    path: 'ngx-bootstrap',
    data: {
        title: 'NgxBootstrap',
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
