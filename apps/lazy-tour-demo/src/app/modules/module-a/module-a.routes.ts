import {Routes} from '@angular/router';
import {ModuleAComponent} from './module-a.component';

const ROUTES: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ModuleAComponent
}, {
    path: '**',
    component: ModuleAComponent
}];

export default ROUTES;
