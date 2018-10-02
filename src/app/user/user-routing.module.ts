import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';



const routes: Routes = [

  { 
    path: '', component: UserComponent,
    children:
    [
      { path: '', redirectTo: 'profile' },
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'change', component: ChangePasswordComponent }
    ]
}

]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }