import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddchefComponent } from './addchef.component';
import { SigninComponent } from '../shared/signin/signin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddchefRoutingModule } from './addchef-routing.module';
import { FooterModule, SigninModule } from '../shared/index';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbPopoverModule,NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsModule } from '../shared/alerts/alerts.module';



@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        AddchefRoutingModule,
        FooterModule,
        ScrollToModule,
        NgbPopoverModule,
        NgbModalModule,
        NgbCollapseModule,
        SigninModule,
        AlertsModule
    ],
    declarations: [ AddchefComponent ],
    entryComponents:[ SigninComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class AddchefModule {}
