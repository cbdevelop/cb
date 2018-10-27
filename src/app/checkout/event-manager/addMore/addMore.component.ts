import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-addMore',
  templateUrl: './addMore.component.html',
  styleUrls: ['./addMore.component.css']
})
export class AddMoreComponent implements OnInit {

  serTypeSettings = {};
  serviceTypeArr = [];
  serviceFlag = true;
  sTypeId = 0;
  selServiceTypeArr = [];
  serviceCost = 0;
  chaffing_dish_cnt = 0;
  butlers_cnt = 0;
  constructor(
    public activeModal: NgbActiveModal,
    public masterObj: MasterService
  ) {
    this.serTypeSettings = {
      singleSelection: true,
      text: 'Select',
      enableSearchFilter: true,
      showCheckbox: false,
      classes: "loca",
      labelKey: "type",
      primaryKey: "id"
    };
    this.serviceTypeArr = this.masterObj.masterServiceType;
  }

  ngOnInit() {
    console.log(this.masterObj.totalCost, this.masterObj.serviceCost);
    this.selServiceTypeArr = this.masterObj.searchObj.serviceType;
    this.serviceCost = this.masterObj.serviceCost;
    this.chaffing_dish_cnt = this.masterObj.chaffing_dish_cnt;
    this.butlers_cnt = this.masterObj.butlers_cnt;
    if (this.masterObj.searchObj.serviceType.length)
      this.serviceFlag = false;

  }

  changeService() {
    this.serviceFlag = true;
  }
  onCancel() {
    if (this.selServiceTypeArr.length == 0) {

      this.masterObj.searchObj.serviceType = this.selServiceTypeArr;;
      this.masterObj.serviceCost = 0;
      this.masterObj.chaffing_dish_cnt = 0;
      this.masterObj.butlers_cnt = 0;
      localStorage.setItem('serviceCost', this.masterObj.serviceCost.toString());
      console.log(this.masterObj.totalCost, this.masterObj.serviceCost);
      localStorage.setItem('bultercnt', this.masterObj.butlers_cnt.toString());
      localStorage.setItem('chafDishCnt', this.masterObj.chaffing_dish_cnt.toString());
      this.activeModal.close();
    } else {
      this.masterObj.searchObj.serviceType = this.selServiceTypeArr;
      
      localStorage.setItem('serviceCost', this.masterObj.serviceCost.toString());
      console.log(this.masterObj.totalCost, this.masterObj.serviceCost);
      localStorage.setItem('bultercnt', this.masterObj.butlers_cnt.toString());
      localStorage.setItem('chafDishCnt', this.masterObj.chaffing_dish_cnt.toString());
      this.activeModal.close();
    }
    localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
  }

  onAdd() {
    //this.masterObj.searchObj.serviceType = [];
    // this.masterObj.searchObj.serviceType = this.selServiceTypeArr;
      this.masterObj.serviceCost = this.serviceCost;
      this.masterObj.chaffing_dish_cnt = this.chaffing_dish_cnt;
      this.masterObj.butlers_cnt = this.butlers_cnt;
    localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
    localStorage.setItem('serviceCost', this.masterObj.serviceCost.toString());

    localStorage.setItem('bultercnt', this.masterObj.butlers_cnt.toString());
    localStorage.setItem('chafDishCnt', this.masterObj.chaffing_dish_cnt.toString());
    this.activeModal.close();
  }

  onServiceSelection() {
    // this.masterObj.totalCost -= this.masterObj.serviceCost ;
    localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
    this.serviceCost = 0;
    this.sTypeId = this.masterObj.searchObj.serviceType[0].id;
    if (this.masterObj.searchObj.serviceType[0].id == 0) {
      this.chaffing_dish_cnt = 0; this.masterObj.butlers_cnt = 0;
    } else if (this.masterObj.searchObj.serviceType[0].id == 1) {
      this.serviceCost += 1500;  // drop off
    } else if (this.masterObj.searchObj.serviceType[0].id == 2) {
      this.calculate();

    } else if (this.masterObj.searchObj.serviceType[0].id == 3) {
      // sit down
      let res = this.masterObj.totalAttendees * (35 / 100)
      this.serviceCost += (res * 100);
      this.butlers_cnt = Math.ceil(res / 7);
      if(this.serviceCost > 35000){
        this.serviceCost = 35000;
        this.butlers_cnt = Math.ceil(res / 7);
      }
      if(this.butlers_cnt > 50){
        //this.serviceCost = 35000;
        this.butlers_cnt = 50;
      }
      


    } else if (this.masterObj.searchObj.serviceType[0].id == 4) {
      this.calculate();

    } else {

    }
    let stallArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 9);
    this.serviceCost += (stallArr.length * 5000);

    // this.masterObj.totalCost += this.masterObj.serviceCost ;

  }

  calculate() {
    let starterArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 1);
    let snackArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 2);
    let bavergeArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 3);
    let soupArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 5);
    // let stallArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 9);
    let saladArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 6);
    let mainArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 7);
    let breadArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 4);
    let dessertArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 8);

    let totalDishs = starterArr.length + snackArr.length + bavergeArr.length + saladArr.length + bavergeArr.length + soupArr.length + saladArr.length + mainArr.length + breadArr.length + dessertArr.length;

    // this.masterObj.chaffing_dish_cnt = totalDishs;

    const flag = this.masterObj.totalAttendees * (35 / 100);

    if (flag <= 80) {
      this.serviceCost += totalDishs * (800 + (900 / 2));
      this.chaffing_dish_cnt = totalDishs;
      this.butlers_cnt = Math.round(totalDishs / 2);
    } else if (flag <= 200) {

      this.serviceCost += 2 * totalDishs * (800 + (900 / 2));
      this.chaffing_dish_cnt = 2 * totalDishs;
      this.butlers_cnt = Math.round(2 * (totalDishs / 2));

    } else if (flag <= 400) {
      this.serviceCost += 3 * totalDishs * (800 + (900 / 2));
      this.chaffing_dish_cnt = 3 * totalDishs;
      this.butlers_cnt = Math.round(3 * (totalDishs / 2));

    } else if (flag <= 1000) {
      this.serviceCost += 4 * totalDishs * (800 + (900 / 2));
      this.chaffing_dish_cnt = 4 * totalDishs;
      this.butlers_cnt = Math.round(4 * (totalDishs / 2));

    } else if (flag > 1000) {
      this.serviceCost += 6 * totalDishs * (800 + (900 / 2));
      this.chaffing_dish_cnt = 6 * totalDishs;
      this.butlers_cnt = Math.round(6 * (totalDishs / 2));

    }

    // buffet and sitdown
    if (this.masterObj.searchObj.serviceType[0].id == 4) {
      // let res = this.masterObj.totalAttendees * (35/100)
      this.serviceCost += (flag * 100);
      this.butlers_cnt += Math.ceil(flag / 7);
      if(this.serviceCost > 35000){
        this.serviceCost = 35000;
        // this.butlers_cnt = Math.ceil(flag / 7);
      }
      if(this.butlers_cnt > 50){
        //this.serviceCost = 35000;
        this.butlers_cnt = 50;
      }
      
    }
    //   if(this.masterObj.totalAttendees <= 500)
    //   this.masterObj.serviceCost +=(starterArr.length * 800) + (snackArr.length * 800) + (saladArr.length * 800) + (mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000);
    // else
    //   this.masterObj.serviceCost += 2*((starterArr.length * 800) + (snackArr.length * 800) + (saladArr.length * 800) +(mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000));
  }
}