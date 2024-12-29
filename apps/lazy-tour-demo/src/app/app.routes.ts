import type {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'module-a',
        loadChildren: () => import('./modules/module-a/module-a.routes')
    },
    {
        path: 'module-b',
        loadChildren: () => import('./modules/module-b/module-b.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }
];