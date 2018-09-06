import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onSave() {
    this.activeModal.close();
  }

}
