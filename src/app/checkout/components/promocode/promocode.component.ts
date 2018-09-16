import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.css']
})
export class PromocodeComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onAdd() {
    this.activeModal.close();
  }

}
