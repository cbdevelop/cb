import { Injectable } from '@angular/core';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { alert } from '../shared/models/alert.model';

@Injectable()
export class AlertsService {

  alert: alert = { type: 'success', message: '' };

  constructor(private modalService: NgbModal) { }

  openAlert(alert: alert) {
    const modalRef = this.modalService.open(AlertsComponent);
    this.alert.message = alert.message;
    this.alert.type = alert.type;
    modalRef.componentInstance.alert = this.alert;
  }
}
