import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { CommentsComponent } from '../../../shared/comments/comments.component';
import { PromocodeComponent } from '../promocode/promocode.component';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  constructor( private commentService: NgbModal ) { }

  ngOnInit() {
  }

  // Comments Model Popup
  onCommentPopup() {
    this.commentService.open(CommentsComponent);    
  }

  // Promocode Popup
  openPromo() {
    this.commentService.open(PromocodeComponent)
  }

}
