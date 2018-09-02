import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventManagerComponent } from './event-manager.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventManagerComponent, ListComponent, ProfileComponent]
})
export class EventManagerModule { }
