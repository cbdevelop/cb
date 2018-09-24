import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { ChefRoutingModule } from './chef/chef-routing.module';

import { CheckoutComponent } from './checkout.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommentsComponent } from '../shared/comments/comments.component';
import { OrderCheckoutComponent } from './components/order-checkout/order-checkout.component';
import { ChefProfileComponent } from './chef/chef-profile/chef-profile.component';
import { ProfileComponent } from './event-manager/profile/profile.component';
import { AddMoreComponent } from './event-manager/addMore/addMore.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule, NgbModule, NgbActiveModal, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule, CommentsModule } from '../shared';
import { MenuModule } from './components/menu/menu.module';
import { ChefModule } from './chef/chef.module';
import { EventManagerModule } from './event-manager/event-manager.module';



@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ScrollToModule,
    NgbModalModule,
    FooterModule,
    ChefRoutingModule,
    CommentsModule,
    ChefModule,
    EventManagerModule,
    MenuModule,
    NgbModule.forRoot(),
    NgbDropdownModule
  ],
  declarations: [
    CheckoutComponent
  ],
  providers: [

    NgbActiveModal
  ],
  entryComponents: [
    CommentsComponent,
    MenuComponent,
    OrderCheckoutComponent,
    ChefProfileComponent,
    ProfileComponent,
    AddMoreComponent
  ]
})

export class CheckoutModule { }
