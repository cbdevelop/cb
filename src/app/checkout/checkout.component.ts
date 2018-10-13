import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromocodeComponent } from './components/promocode/promocode.component';
import { Router } from '@angular/router';
import { CommentsComponent } from '../shared/comments/comments.component';
import { MobilePreviewComponent } from './components/mobile-preview/mobile-preview.component';
import { SigninComponent } from '../shared/signin/signin.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isCollapsed = false;
  constructor(
    private masterObj: MasterService,
    private commentService: NgbModal,
    private router:Router
  ) {
    this.getlist();
  }

  ngOnInit() {
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  getlist() {
    // this.masterObj.filteredchefList = [];

    var min = this.masterObj.selectedDishArr.length;

    min = min <= 2 ? 1 : min < 5 ? 3 : 5;
    /* 1 to 3 dishes 1 chef*/
    /* 3 to 10 dishes 2 to 5 chef*/
  
    var length = this.masterObj.randomInt(1, min);
    if (this.masterObj.filteredchefList.length < length) {
      this.masterObj.filteredchefList = [];
      for (var i = 0; i < length; i++) {
        let index = this.masterObj.randomInt(1, this.masterObj.ChefData.length-1);
        let arr = this.masterObj.ChefData[index];
        console.log(index,arr);
        if(arr !== undefined)
          this.masterObj.filteredchefList.push(arr);
      }
      
    }
    console.log( this.masterObj.filteredchefList);
  }

  openPromo() {
    this.commentService.open(PromocodeComponent)
  }
  onproceed(){
    if(this.masterObj.evntManagerSelFlag || this.masterObj.selectedEvtManager.length){
      this.router.navigate(['./payment']); 
    }
  }

   // Comments Model Popup
   onCommentPopup() {
    this.commentService.open(CommentsComponent);    
  }

  opencat(){
    this.commentService.open(MobilePreviewComponent); 
  }

   // Sign-in Open
   openSign() {
    this.commentService.open(SigninComponent);
  }

}
