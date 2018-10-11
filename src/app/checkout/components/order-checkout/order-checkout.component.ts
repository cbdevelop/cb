import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { CommentsComponent } from '../../../shared/comments/comments.component';
import { PromocodeComponent } from '../promocode/promocode.component';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  constructor( 
    private commentService: NgbModal,
    public masterObj:MasterService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.masterObj.selectedDishArr);
  }

  // Comments Model Popup
  onCommentPopup() {
    this.commentService.open(CommentsComponent);    
  }

  // Promocode Popup
  openPromo() {
    this.commentService.open(PromocodeComponent)
  }

  onproceed() {
    if(this.masterObj.evntManagerSelFlag || this.masterObj.selectedEvtManager.length){
      this.router.navigate(['./payment']); 
    }
  }

  remove(i){
    this.masterObj.totalCost -= this.masterObj.selectedEvtManager[i].Price;
    this.masterObj.selectedEvtManager.splice(i);
    var selManager = JSON.stringify(this.masterObj.selectedEvtManager);
    localStorage.setItem("selManager", selManager);
    localStorage.setItem("cost",this.masterObj.totalCost.toString());
  }
}
