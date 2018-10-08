import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentComponent } from './payment.component';
import { AddressComponent } from './address/address.component';
import { PayComponent } from './pay/pay.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PaymentRoutingModule } from './payment-routing.module';
import { FooterModule } from '../shared';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    ScrollToModule,
    PaymentRoutingModule,
    FooterModule,
    NgbCollapseModule,
  ],
  declarations: [ 
    PaymentComponent, 
    AddressComponent, 
    PayComponent
  ]
})
export class PaymentModule { }