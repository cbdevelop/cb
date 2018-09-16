import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventManagerComponent } from './event-manager.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { AddMoreComponent } from './addMore/addMore.component';

import { EventManagerRoutingModule } from './event-manager-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 

import { MasterService } from '../../services/master.service';


@NgModule({
  imports: [
    CommonModule,
    EventManagerRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [ 
    EventManagerComponent, 
    ListComponent, 
    ProfileComponent,
    AddMoreComponent
  ],
  providers:[
    MasterService
  ]
})
export class EventManagerModule { }
