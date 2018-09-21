import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FooterModule } from '../shared';
import { UserRoutingModule } from './user-routing.module';

import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { UserComponent } from './user.component';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    UserRoutingModule,
    ScrollToModule,
    FooterModule,
    NgbModule.forRoot(),
    NgbDropdownModule
  ],
  declarations: [ 
    ProfileComponent,
    OrdersComponent,
    ChangePasswordComponent,
    UserComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserModule { }