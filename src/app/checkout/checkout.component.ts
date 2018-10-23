import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromocodeComponent } from './components/promocode/promocode.component';
import { Router } from '@angular/router';
import { CommentsComponent } from '../shared/comments/comments.component';
import { MobilePreviewComponent } from './components/mobile-preview/mobile-preview.component';
import { SigninComponent } from '../shared/signin/signin.component';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isCollapsed = false;
  constructor(
    public masterObj: MasterService,
    private commentService: NgbModal,
    private router: Router,
    private alertObj: AlertsService
  ) {
   
    if (this.masterObj.selectedDishArr.length < 1) {
      this.router.navigate(['../search']);
    }
  }

  ngOnInit() {

    /* 
     if (this.masterObj.searchObj.serviceType[0].id == 1) {
       this.masterObj.totalCost += 600;  // drop off
     } else if (this.masterObj.searchObj.serviceType[0].id == 2) {
 
       let mainArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 7);
       let breadArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 4);
       let dessertArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 8);
       this.masterObj.totalCost += (mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000);
 
     } else if (this.masterObj.searchObj.serviceType[0].id == 3) {
       this.masterObj.totalCost += (this.masterObj.totalAttendees * 50);
 
     } else if (this.masterObj.searchObj.serviceType[0].id == 4) {
 
       let mainArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 7);
       let breadArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 4);
       let dessertArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 8);
       this.masterObj.totalCost += (this.masterObj.totalAttendees * 50);
       this.masterObj.totalCost += (mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000);
     }
     let stallArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 9);
     this.masterObj.totalCost += (stallArr.length * 5000) ;
     */
  }


  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

 

  getMenu(cheLength, index) {
    let disLength = this.masterObj.selectedDishArr.length;
    let menu = '';
    if (disLength <= 2) {
      for (let i = 1; i < disLength; i++) {
        if (this.masterObj.selectedDishArr[i].Menu_Type == 8) {

        } else {
          if (menu == '') {
            menu = this.masterObj.selectedDishArr[i].Dish_Name;
          } else
            menu = menu + ',' + this.masterObj.selectedDishArr[i].Dish_Name

        }
      }
      return menu;
    } else if (disLength < 5) {
      menu = this.masterObj.selectedDishArr[0].Dish_Name;
      for (let i = 1; i < 3; i++) {
        menu = menu + ',' + this.masterObj.selectedDishArr[i].Dish_Name
      }
    }
  }

  openPromo() {
    this.commentService.open(PromocodeComponent)
  }
  onproceed() {
    if (this.masterObj.evntManagerSelFlag || this.masterObj.selectedEvtManager.length) {
      this.router.navigate(['./payment']);
    } else {
      this.alertObj.openAlert({ message: 'Please Select Event manager or confirm that you can manage this event without a event maganer', type: 'warning' })
    }
  }

  // Comments Model Popup
  onCommentPopup() {
    this.commentService.open(CommentsComponent);
  }

  opencat() {
    this.commentService.open(MobilePreviewComponent);
  }

  // Sign-in Open
  openSign() {
    this.commentService.open(SigninComponent);
  }

}
