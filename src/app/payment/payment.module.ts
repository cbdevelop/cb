import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { AddressComponent } from './address/address.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaymentComponent, AddressComponent, PayComponent]
})
export class PaymentModule { }
