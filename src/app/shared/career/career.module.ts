import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FooterModule } from '../footer/footer.module';
import { SigninModule } from '../signin/signin.module';
import { CareerRoutingModule } from './career-routing.module';

import { NgbPopoverModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { SigninComponent } from '../signin/signin.component';
import { CareerComponent } from './career.component';
import { PositionsComponent } from './positions/positions.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    CareerRoutingModule,
    ScrollToModule,
    FooterModule,
    NgbPopoverModule,
    NgbModalModule,
    SigninModule
  ],
  declarations: [ 
    CareerComponent,
    PositionsComponent
  ],
  entryComponents:[ 
    SigninComponent, 
    PositionsComponent
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CareerModule { }