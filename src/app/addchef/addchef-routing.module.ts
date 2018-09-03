import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddchefComponent } from './addchef.component';

const appRoutes: Routes = [

  { path: '', component: AddchefComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class AddchefRoutingModule { }
