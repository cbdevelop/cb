import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ChefComponent } from './chef.component';
 

const routes: Routes = [
    {
        path: '', component: ChefComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChefRoutingModule {
}
