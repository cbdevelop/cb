import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { alert } from '../models/alert.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  temp: alert = { type: 'success', message: '' };
  @Input('alert') alert;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    console.log(this.alert);
    this.temp = this.alert;
  }

  closeAlert(alert) {
    this.activeModal.close();
  }
}
