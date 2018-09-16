import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addMore',
  templateUrl: './addMore.component.html',
  styleUrls: ['./addMore.component.css']
})
export class AddMoreComponent implements OnInit {

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