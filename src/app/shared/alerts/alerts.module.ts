import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';
import { NgbModalModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,NgbAlertModule,NgbModalModule
  ],
  declarations: [AlertsComponent],
  exports: [
    AlertsComponent
  ],
  entryComponents:[
    AlertsComponent
  ]
})
export class AlertsModule { }
