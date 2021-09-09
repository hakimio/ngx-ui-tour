import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModuleBComponent} from './module-b.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ModuleBComponent
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
export class ModuleBRoutingModule {}
