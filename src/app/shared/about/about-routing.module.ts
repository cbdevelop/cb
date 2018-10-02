import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [

  { path: '', component: AboutComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
