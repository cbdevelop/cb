import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddchefComponent } from './addchef.component';
import { AddchefRoutingModule } from './addchef-routing.module';
import { FooterModule } from '../shared/index';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        AddchefRoutingModule,
        FooterModule,
        ScrollToModule,
        NgbPopoverModule
    ],
    declarations: [ AddchefComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class AddchefModule {}
