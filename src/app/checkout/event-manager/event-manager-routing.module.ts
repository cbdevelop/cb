import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventManagerComponent } from './event-manager.component';
 

const routes: Routes = [
    {
        path: '', component: EventManagerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventManagerRoutingModule {
}