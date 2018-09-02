import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefComponent } from './chef.component';
import { ChefListComponent } from './chef-list/chef-list.component';
import { ChefProfileComponent } from './chef-profile/chef-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChefComponent, ChefListComponent, ChefProfileComponent]
})
export class ChefModule { }
