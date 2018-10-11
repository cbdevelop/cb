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
    public masterObj: MasterService,
    public activeModal: NgbActiveModal) { 
      
    }

  ngOnInit() {
    // console.log(this.masterObj.comments);
    
  }

  onCancel() {

    this.activeModal.dismiss();
  }

  onSave() {
    localStorage.setItem("comment", this.masterObj.comments);
    this.activeModal.close();
  }

}
