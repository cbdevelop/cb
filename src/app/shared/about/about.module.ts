import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FooterModule } from '../footer/footer.module';
import { SigninModule } from '../signin/signin.module';
import { AboutRoutingModule } from './about-routing.module';

import { NgbPopoverModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about.component';
import { SigninComponent } from '../signin/signin.component';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    ScrollToModule,
    FooterModule,
    NgbPopoverModule,
    NgbModalModule,
    SigninModule
  ],
  declarations: [ 
    AboutComponent
  ],
  entryComponents:[ SigninComponent ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AboutModule { }