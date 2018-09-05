import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

  constructor( 
    private commentService: NgbModal, 
    public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  // Comments Model Popup
  onNotePopup(comment) {
    this.commentService.open(comment)
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onSave() {
    this.activeModal.close();
  }

}
