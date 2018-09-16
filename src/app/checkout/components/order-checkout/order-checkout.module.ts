import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderCheckoutComponent } from './order-checkout.component'
import { CommentsComponent } from '../../../shared/comments/comments.component';
import { PromocodeComponent } from '../promocode/promocode.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentsModule } from '../../../shared';
import { PromocodeModule } from '../promocode/promocode.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
    CommentsModule,
    PromocodeModule
  ],
  declarations: [ OrderCheckoutComponent ],
  exports:[ OrderCheckoutComponent ],
  entryComponents: [ OrderCheckoutComponent, CommentsComponent, PromocodeComponent ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrderCheckoutModule { }
