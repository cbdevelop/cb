import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isCollapsed = false;
  constructor(private masterObj: MasterService) {
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
        let index = this.masterObj.randomInt(1, this.masterObj.ChefData.length);
        let arr = this.masterObj.ChefData[index];
        console.log(index,arr);
        if(arr !== undefined)
          this.masterObj.filteredchefList.push(arr);
      }
      
    }
    console.log( this.masterObj.filteredchefList);
  }


}
