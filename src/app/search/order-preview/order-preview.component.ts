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
  
  remove(cat_id,id){
    if (cat_id == 1) {
      this.masterObj.selectedDishes.best.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 2) {
      this.masterObj.selectedDishes.starter.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 3) {
      this.masterObj.selectedDishes.main.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 4) {
      this.masterObj.selectedDishes.biryani.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 5) {
      this.masterObj.selectedDishes.beverges.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 6) {
    }
    // this.masterObj.selectedDishes.splice(this.masterObj.selectedDishes.indexOf(id) , 1);
    console.log(this.masterObj.selectedDishes);
  } 

  // Comments Model Popup
  onCommentPopup() {
    this.commentService.open(CommentsComponent);    
  }

}
