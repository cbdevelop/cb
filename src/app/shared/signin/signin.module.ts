import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';
import { AuthService } from '../../services/auth_service/auth.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [ SigninComponent ],
  exports: [ SigninComponent ],
  entryComponents: [ SigninComponent ],
  providers: [ AuthService ]
})
export class SigninModule { }
