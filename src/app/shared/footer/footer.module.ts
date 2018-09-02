import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule
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
