import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { FooterModule } from '../footer/footer.module';
import { SigninModule } from '../signin/signin.module';

import { NgbPopoverModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { TermsComponent } from './terms.component';
import { SigninComponent } from '../signin/signin.component';



@NgModule({
  imports: [
    CommonModule,
    TermsRoutingModule,
    ScrollToModule,
    FooterModule,
    NgbPopoverModule,
    NgbModalModule,
    SigninModule
  ],
  declarations: [ 
    TermsComponent
  ],
  entryComponents:[ SigninComponent ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TermsModule { }