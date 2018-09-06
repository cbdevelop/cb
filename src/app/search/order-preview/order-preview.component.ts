import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

  constructor(public masterObj:MasterService,
    private commentService: NgbModal, 
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  remove(id){
    this.masterObj.selectedDishes.splice(this.masterObj.selectedDishes.indexOf(id) , 1);
    console.log(this.masterObj.selectedDishes);
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
