import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../services/auth_service/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
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
