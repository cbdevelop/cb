import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmanagerComponent } from './addmanager.component';
import { AddmanagerRoutingModule } from './addmanager-routing.module';
import { FooterModule } from '../shared/index';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        AddmanagerRoutingModule,
        FooterModule,
        ScrollToModule,
        NgbPopoverModule 
    ],
    declarations: [ AddmanagerComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class AddmanagerModule {}
