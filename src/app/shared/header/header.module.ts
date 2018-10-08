import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule } from '@angular/router';
import { SigninModule } from '../signin/signin.module';
import { SigninComponent } from '../signin/signin.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ScrollToModule,
    RouterModule,
    NgbModalModule,
    SigninModule,
    NgbCollapseModule
  ],
  declarations: [
    HeaderComponent,
    
  ],
  exports:[
    HeaderComponent
  ],
  entryComponents: [ SigninComponent ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HeaderModule { }
