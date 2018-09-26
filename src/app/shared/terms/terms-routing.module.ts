import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms.component';

const appRoutes: Routes = [

  { path: '', component: TermsComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
