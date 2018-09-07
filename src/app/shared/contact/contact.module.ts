import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FooterModule } from '../footer/footer.module';
import { SigninModule } from '../signin/signin.module';
import { SigninComponent } from '../signin/signin.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        ContactRoutingModule,
        FooterModule,
        ScrollToModule,
        NgbPopoverModule,
        NgbModalModule,
        SigninModule
    ],
    declarations: [ ContactComponent ],
    entryComponents: [ SigninComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class ContactModule {}
