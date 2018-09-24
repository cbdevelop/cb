import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private masterObj:MasterService ) { 
    this.getlist();
  }

  ngOnInit() {
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  getlist(){
    var min = this.masterObj.selectedDishes.best.length+ this.masterObj.selectedDishes.starter.length+ 
    this.masterObj.selectedDishes.main.length+ this.masterObj.selectedDishes.biryani.length;

    min = min < 3 ? 3 : 5;
    var length = this.masterObj.randomInt(1,min);

    for(var i =0;i<length;i++){
      var index = this.masterObj.randomInt(1,this.masterObj.ChefData.length);
      this.masterObj.filteredchefList.push(this.masterObj.ChefData[index]);
    }
    
  }


}
