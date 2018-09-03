import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FooterModule } from '../footer/footer.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        ContactRoutingModule,
        FooterModule,
        ScrollToModule,
        NgbPopoverModule 
    ],
    declarations: [ ContactComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class ContactModule {}
