import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule, HeaderModule } from '../shared/index';
 
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    FooterModule,
    HeaderModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    
  ],
  declarations: [HomeComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
