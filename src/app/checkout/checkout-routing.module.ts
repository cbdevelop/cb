import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';


const routes: Routes = [

  { 
      path: '', component: CheckoutComponent,
      children:
      [
        { path: '', redirectTo: 'chef' },
        { path: 'chef', loadChildren: './chef/chef.module#ChefModule' },
        { path: 'manager', loadChildren: './event-manager/event-manager.module#EventManagerModule' },
      ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class CheckoutRoutingModule { } 