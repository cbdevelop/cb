import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy.component';

const appRoutes: Routes = [

  { path: '', component: PrivacyComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class PrivacyRoutingModule { }
