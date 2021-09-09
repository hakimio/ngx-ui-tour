import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModuleAComponent} from './module-a.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ModuleAComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleARoutingModule {}
