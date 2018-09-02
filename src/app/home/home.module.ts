import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule, HeaderModule } from '../shared/index';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    FooterModule,
    HeaderModule,
    NgbDatepickerModule,
  ],
  declarations: [HomeComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
