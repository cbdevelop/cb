import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { CommentsComponent } from '../../shared';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

  constructor(public masterObj:MasterService,
    private commentService: NgbModal ) { }

  ngOnInit() {
  }
  remove(id){
    this.masterObj.selectedDishes.splice(this.masterObj.selectedDishes.indexOf(id) , 1);
    console.log(this.masterObj.selectedDishes);
  }

  // Comments Model Popup
  onCommentPopup() {
    this.commentService.open(CommentsComponent);    
  }

}
