import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterService } from '../../services/master.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChefRoutingModule } from './chef-routing.module';

import { ChefComponent } from './chef.component';
import { ChefListComponent } from './chef-list/chef-list.component';
import { ChefProfileComponent } from './chef-profile/chef-profile.component';


@NgModule({
  imports: [
    CommonModule,
    ChefRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [ 
    ChefComponent,
    ChefListComponent,
    ChefProfileComponent
   ],
  providers:[
    MasterService
  ]
})
export class ChefModule { }
