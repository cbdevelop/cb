import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

import { NgbPopoverConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';
import { ModifySearchComponent } from '../../shared/modify-search/modify-search.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsComponent } from '../../shared/comments/comments.component';
import { UserService } from '../../services/user_service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [NgbPopoverConfig]
})
export class MenuComponent implements OnInit {

  menuList = [];
  selectedItems = [];
  settings = {};

  @ViewChild('cheftop') cheftop;

  constructor(
    private userSerObj: UserService,
    private router: Router,
    private route: ActivatedRoute,
    public masterObj: MasterService,
    public modifiedService: NgbModal,
    public config: NgbPopoverConfig) {

    // customize default values of popovers used by this component tree
    config.placement = 'bottom';
    config.triggers = 'click';
  }
  ngOnInit() {
    // this.all_categories = this.service.alldishes;
    this.menuList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];

    this.settings = {
      singleSelection: false,
      text: "+ More",
      badgeShowLimit: 2,
      enableSearchFilter: true
    };
    
  }


  menuSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  menuDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  SelectAll(items: any) {
    console.log(items);
  }
  DeSelectAll(items: any) {
    console.log(items);
  }

  // modified Search
  openModified() {
    this.modifiedService.open(ModifySearchComponent);

  }

  // Comments Model Popup
  onCommentPopup() {
    this.modifiedService.open(CommentsComponent);
  }

  onCheckout() {
    if (this.userSerObj.userId) {

    }
    if (this.masterObj.selectedDishArr.length) {
      this.masterObj.dishesCost = this.masterObj.totalCost;
      localStorage.setItem('dishCost', this.masterObj.dishesCost.toString());
      this.router.navigate(['../chef'], { relativeTo: this.route });
      // this.getlist() 
    }
  }
  getlist() {
    // this.service.filteredchefList = [];
    if (this.masterObj.chefsCost > 0 && this.masterObj.totalCost){
      this.masterObj.totalCost -= this.masterObj.chefsCost;
      this.masterObj.chefsCost =0;
    }
    let min = this.masterObj.selectedDishArr.length;
    min = (min <= 2) ? 1 : ((min < 5) ? 2 : 5);
    /* 1 to 3 dishes 1 chef*/
    /* 3 to 10 dishes 2 to 5 chef*/
    let length = this.masterObj.randomInt(1, min);
  
    if (this.masterObj.filteredchefList.length < length) {
      this.masterObj.filteredchefList = [];
      for (let i = 0; i < length; i++) {
        let index = this.masterObj.randomInt(1, this.masterObj.ChefData.length);
        let arr:any;
        if(index != undefined && index < this.masterObj.ChefData.length){
          arr = this.masterObj.ChefData[index];

        } else {
          let index = this.masterObj.randomInt(1, this.masterObj.ChefData.length-1);
          arr = this.masterObj.ChefData[index];
        }
        if (arr !== undefined) {
          arr.menu = '';
          let cost = 0;
          console.log(arr.Cost);
          if (this.masterObj.totalAttendees <= 250)
            this.masterObj.chefsCost += parseInt(arr.Cost,10);
          else {
            let percent = 1 + (this.masterObj.totalAttendees - 250) / 100;
            cost = arr.Cost + (Math.round(percent) * (0.2) * arr.Cost);
            this.masterObj.chefsCost += cost;
          }
  
          this.masterObj.filteredchefList.push(arr);
        }
      }
      localStorage.setItem('chefsList', JSON.stringify(this.masterObj.filteredchefList));
      localStorage.setItem('chefsCost', this.masterObj.chefsCost.toString());
      console.log(this.masterObj.totalCost, this.masterObj.chefsCost)
      this.masterObj.totalCost += this.masterObj.chefsCost;
    }
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number > 100) {
      this.cheftop.nativeElement.classList.add('chefHeadFixed');
    } else {
      this.cheftop.nativeElement.classList.remove('chefHeadFixed');
    }
  };



}
