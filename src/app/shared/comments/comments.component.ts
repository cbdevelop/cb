import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment: string;
  constructor(
    private masterObj: MasterService,
    public activeModal: NgbActiveModal) { 
      
    }

  ngOnInit() {
    console.log(this.masterObj.comments);
    if(this.masterObj.comments !="")
       this.comment = this.masterObj.comments ;
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onSave() {
    this.masterObj.comments = this.comment;
    this.activeModal.close();
  }

}
