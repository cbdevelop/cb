import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule, HeaderModule } from '../shared/index';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    FooterModule,
    HeaderModule,
    AngularMultiSelectModule
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    
  ],
  declarations: [HomeComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
