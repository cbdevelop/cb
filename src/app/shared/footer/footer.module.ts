import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent],
  exports:[
    FooterComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FooterModule { }
