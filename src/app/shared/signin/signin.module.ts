import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';
import { AuthService } from '../../services/auth_service/auth.service';
import { AlertsComponent } from '../alerts/alerts.component';
import { AlertsModule } from '../alerts/alerts.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AlertsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [ SigninComponent ],
  exports: [ SigninComponent ],
  entryComponents: [ AlertsComponent ],
  providers: [ AuthService ]
})
export class SigninModule { }
