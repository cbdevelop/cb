import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PaymentComponent } from './payment.component';


const routes: Routes = [

  { path: '', component: PaymentComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
