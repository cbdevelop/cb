import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule, HeaderModule, DirectiveModule } from '../shared/index';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ModifySearchModule } from '../shared/modify-search/modify-search.module';
import { AlertsModule } from '../shared/alerts/alerts.module';



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
  entryComponents:[
    // ModifySearchComponent,

  ]
})
export class HomeModule { }
