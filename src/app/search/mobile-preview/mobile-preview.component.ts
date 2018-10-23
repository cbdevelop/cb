import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MasterService } from '../../services/master.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user_service/user.service';

@Component({
  selector: 'app-mobile-preview',
  templateUrl: './mobile-preview.component.html',
  styleUrls: ['./mobile-preview.component.css']
})
export class MobilePreviewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public masterObj: MasterService,
    private userSerObj: UserService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  remove(cat_id, index) {

    var selectedDish = JSON.stringify(this.masterObj.selectedDishArr);
    localStorage.setItem("cost", this.masterObj.totalCost.toString());
    localStorage.setItem("selDises", selectedDish);
  }

  getcus(cusines, restricted_ser) {
    var sub = "";
    if (cusines.length) {
      sub = cusines[0];
      for (var i = 1; i < cusines.length; i++) {
        sub = sub + "," + cusines[i];
      }
    }

    if (restricted_ser.length) {
      sub = sub == "" ? restricted_ser[0] : "," + restricted_ser[0];
      for (var i = 1; i < cusines.length; i++) {
        sub = sub + "," + restricted_ser[i];
      }
    }

    return sub == "" ? "" : "(" + sub + ")";
  }

  onClose() {
    this.activeModal.dismiss();
  }


  onCheckout() {
    if (this.userSerObj.userId) {

    }
    if (this.masterObj.selectedDishArr.length) {
      this.activeModal.close();
      if (this.masterObj.selCity.ID == 6) {

      } else {

        this.masterObj.dishesCost = this.masterObj.totalCost;
        localStorage.setItem('dishCost', this.masterObj.dishesCost.toString());
        this.router.navigate(['../chef'], { relativeTo: this.route });
        // this.getlist();
      }
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
        let arr = this.masterObj.ChefData[index];
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
}
