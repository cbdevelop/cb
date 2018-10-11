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

    min = min < 3 ? 3 : 5;
    var length = this.masterObj.randomInt(1, min);
    if (this.masterObj.filteredchefList.length < length) {
      this.masterObj.filteredchefList = [];
      for (var i = 0; i < length; i++) {
        var index = this.masterObj.randomInt(1, this.masterObj.ChefData.length);
        this.masterObj.filteredchefList.push(this.masterObj.ChefData[index]);
      }
    }
  }


}
