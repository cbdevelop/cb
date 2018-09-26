import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { FooterModule } from '../footer/footer.module';
import { SigninModule } from '../signin/signin.module';

import { NgbPopoverModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PrivacyComponent } from './privacy.component';
import { SigninComponent } from '../signin/signin.component';



@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    ScrollToModule,
    FooterModule,
    NgbPopoverModule,
    NgbModalModule,
    SigninModule
  ],
  declarations: [ 
    PrivacyComponent
  ],
  entryComponents:[ SigninComponent ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PrivacyModule { }