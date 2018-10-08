import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmanagerComponent } from './addmanager.component';
import { SigninComponent } from '../shared/signin/signin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmanagerRoutingModule } from './addmanager-routing.module';
import { FooterModule, SigninModule } from '../shared/index';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbPopoverModule,NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsModule } from '../shared/alerts/alerts.module';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        AddmanagerRoutingModule,
        FooterModule,
        ScrollToModule,
        NgbPopoverModule,
        NgbModalModule,
        NgbCollapseModule,
        SigninModule ,
        AlertsModule
    ],
    declarations: [ AddmanagerComponent ],
    entryComponents:[ SigninComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class AddmanagerModule {}
