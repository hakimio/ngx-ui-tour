import type {Routes} from '@angular/router';
import {ModuleBComponent} from './module-b.component';

const ROUTES: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ModuleBComponent
}, {
    path: '**',
    component: ModuleBComponent
}];

export default ROUTES;