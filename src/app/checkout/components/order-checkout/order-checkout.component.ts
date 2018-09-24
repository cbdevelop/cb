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
    private masterObj:MasterService
  ) { }

  ngOnInit() {
    console.log(this.masterObj.selectedDishes);
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
    
  }
}
