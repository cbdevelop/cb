import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career.component';

const appRoutes: Routes = [

  { path: '', component: CareerComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
