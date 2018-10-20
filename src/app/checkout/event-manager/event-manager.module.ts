import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventManagerComponent } from './event-manager.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { AddMoreComponent } from './addMore/addMore.component';

import { EventManagerRoutingModule } from './event-manager-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { MobilePreviewModule } from '../components/mobile-preview/mobile-preview.module';



@NgModule({
  imports: [
    CommonModule,
    EventManagerRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    MobilePreviewModule
  ],
  declarations: [ 
    EventManagerComponent, 
    ListComponent, 
    ProfileComponent,
    AddMoreComponent
  ],
  providers:[
  ],
  entryComponents:[

  ]
})
export class EventManagerModule { }
