import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderCheckoutComponent } from '../order-checkout/order-checkout.component';
import { OrderCheckoutModule } from '../order-checkout/order-checkout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
    OrderCheckoutModule
  ],
  declarations: [ MenuComponent ],
  exports:[ MenuComponent ],
  entryComponents: [ MenuComponent, OrderCheckoutComponent ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MenuModule { }
