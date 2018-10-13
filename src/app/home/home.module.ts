import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule, HeaderModule, DirectiveModule } from '../shared/index';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ModifySearchModule } from '../shared/modify-search/modify-search.module';
import { AlertsModule } from '../shared/alerts/alerts.module';
import {  } from '@angular/common/src/pipes/date_pipe';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DirectiveModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    FooterModule,
    HeaderModule,
    AngularMultiSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ModifySearchModule,
    AlertsModule
  ],
  declarations: [
    HomeComponent,
    // ModifySearchComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    // ModifySearchComponent,

  ],
  providers:[
    DatePipe
  ]
})
export class HomeModule { }
