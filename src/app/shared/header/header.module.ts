import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ScrollToModule,RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HeaderModule { }
