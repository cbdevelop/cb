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
  serviceTypeArr =[];
  serviceFlag = true;
  constructor(
    public activeModal: NgbActiveModal,
    public masterObj: MasterService
  ) {
    this.serTypeSettings = {
      singleSelection: true,
      text: 'Select',
      enableSearchFilter: true,
      showCheckbox: false,
      labelKey: "type",
      primaryKey: "id"
    };
    this.serviceTypeArr = this.masterObj.masterServiceType;
  }

  ngOnInit() {
    console.log( this.masterObj.totalCost ,this.masterObj.serviceCost);
    if(this.masterObj.searchObj.serviceType.length)
      this.serviceFlag = false;

  }

  changeService() {
    this.serviceFlag = true;
  }
  onCancel() {
    this.activeModal.dismiss();
  }

  onAdd() {
    // this.masterObj.totalCost -= this.masterObj.serviceCost ;
    localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
    this.masterObj.serviceCost =0;
    if (this.masterObj.searchObj.serviceType[0].id == 1) {
      this.masterObj.serviceCost += 600;  // drop off
    } else if (this.masterObj.searchObj.serviceType[0].id == 2) {
      let starterArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 1);
      let snackArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 2);
      let saladArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 6);
      let mainArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 7);
      let breadArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 4);
      let dessertArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 8);
      if(this.masterObj.totalAttendees <= 500)
        this.masterObj.serviceCost +=(starterArr.length * 800) + (snackArr.length * 800) + (saladArr.length * 800) + (mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000);
      else
        this.masterObj.serviceCost += 2*((starterArr.length * 800) + (snackArr.length * 800) + (saladArr.length * 800) +(mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000));
    } else if (this.masterObj.searchObj.serviceType[0].id == 3) {
      this.masterObj.serviceCost += (this.masterObj.totalAttendees * 50);

    } else if (this.masterObj.searchObj.serviceType[0].id == 4) {

      let starterArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 1);
      let snackArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 2);
      let saladArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 6);
      let mainArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 7);
      let breadArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 4);
      let dessertArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 8);
      this.masterObj.serviceCost += (this.masterObj.totalAttendees * 50);
      if(this.masterObj.totalAttendees <= 500)
        this.masterObj.serviceCost += (starterArr.length * 800) + (snackArr.length * 800) + (saladArr.length * 800) + (mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000);
      else
        this.masterObj.serviceCost += 2*((starterArr.length * 800) + (snackArr.length * 800) + (saladArr.length * 800) +(mainArr.length * 800) + (breadArr.length * 400) + (dessertArr.length * 1000));
    } else {

    }
    let stallArr = this.masterObj.selectedDishArr.filter(x => x.Menu_Type == 9);
    this.masterObj.serviceCost += (stallArr.length * 5000) ;

    // this.masterObj.totalCost += this.masterObj.serviceCost ;
    localStorage.setItem('serviceCost', this.masterObj.serviceCost.toString());
    console.log( this.masterObj.totalCost ,this.masterObj.serviceCost);
    this.activeModal.close();
  }

}