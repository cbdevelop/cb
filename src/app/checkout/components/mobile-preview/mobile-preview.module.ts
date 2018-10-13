import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MobilePreviewComponent } from './mobile-preview.component';
import { OrderCheckoutModule } from '../order-checkout/order-checkout.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
    OrderCheckoutModule
  ],
  declarations: [ MobilePreviewComponent ],
  exports:[ MobilePreviewComponent ],
  entryComponents: [ MobilePreviewComponent ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MobilePreviewModule { }
