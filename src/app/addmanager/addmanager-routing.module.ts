import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddmanagerComponent } from './addmanager.component';

const appRoutes: Routes = [

  { path: '', component: AddmanagerComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class AddmanagerRoutingModule { }
