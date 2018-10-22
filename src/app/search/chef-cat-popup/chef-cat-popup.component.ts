import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';
import { Dish, DishModel } from '../../shared/models/dish.model';
import { Menu } from '../../shared/models/menu.mode';
import { AlertsComponent } from '../../shared/alerts/alerts.component';
import { alert } from '../../shared/models/alert.model';

@Component({
  selector: 'app-chef-cat-popup',
  templateUrl: './chef-cat-popup.component.html',
  styleUrls: ['./chef-cat-popup.component.css']
})
export class ChefCatPopupComponent implements OnInit {

  alert: alert = { type: 'success', message: '' };

  @Input() cat_id;
  @Input() dishId;

  res = [];
  cus = [];
  btnText = 'Add';
  dishDetails: DishModel;

  restrictArr = [
    'Only for vegetarian', 'Mostly for vegetarian(50% of total Attendees)', 'Only for main table(25% of total Attendees)'
  ];
  constructor(
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private masterService: MasterService
  ) {

  }

  ngOnInit() {

    this.dishDetails = this.findDish();
    if (this.dishDetails.Category_Type == 2) {
      this.restrictArr = this.restrictArr.slice(2);
    }
  }


  findDish() {
    var arr: DishModel[] = this.masterService.dishArray.filter(x => x.id == this.dishId);
    let index = this.masterService.selectedDishArr.findIndex(d => d.id == this.dishId);
    if (index !== -1) {
      // return this.masterService.selectedDishArr[index];

      this.btnText = 'Update';
      this.cus = this.getArr(this.masterService.selectedDishArr[index].Cuisine);
      this.res = this.getArr(this.masterService.selectedDishArr[index].Restrictions);

    }

    return arr[0];

  }

  oncancel() {
    this.activeModal.dismiss();
  }

  onAdd() {
    let index = this.masterService.selectedDishArr.findIndex(d => d.id == this.dishId);
    if (index != -1) {
      let arr = this.masterService.selectedDishArr[index];
      // this.masterService.totalCost = this.masterService.totalCost - arr.Price;

      if (arr.Category_Type == 2) {
        // nonveg
        if (arr.Restrictions == "")
          this.masterService.totalCost -= this.masterService.searchObj.nonVegAttnd * arr.Price;
        else
          this.masterService.totalCost -= Math.ceil(1 / 4 * this.masterService.searchObj.nonVegAttnd) * arr.Price;
      } else if (arr.Category_Type == 1) {
        /* restricted service functionality */
        // veg people
        //this.masterService.totalCost -= this.masterService.totalAttendees * arr.Price;
        if (arr.Restrictions == "")
          this.masterService.totalCost -= this.masterService.totalAttendees * arr.Price;
        else if (arr.Restrictions.includes('Only for vegetarian'))
          this.masterService.totalCost -= this.masterService.searchObj.vegAttnd * arr.Price;
        else if (arr.Restrictions.includes('Mostly for vegetarian(50% of total Attendees)'))
          this.masterService.totalCost -= (this.masterService.searchObj.vegAttnd + (1 / 2 * this.masterService.searchObj.nonVegAttnd)) * arr.Price;
        else
          this.masterService.totalCost -= Math.ceil(1 / 4 * this.masterService.totalAttendees) * arr.Price;
      } else {
        this.masterService.totalCost -= this.masterService.totalAttendees * arr.Price;
      }
      this.masterService.selectedDishArr.splice(index);

    }
    let cusine = "";
    if (this.cus.length > 0) {
      cusine = this.cus[0];
      for (let i = 1; i < this.cus.length; i++)
        cusine = cusine + ',' + this.cus[i];
    } else {
      const modalRef = this.modalService.open(AlertsComponent);
      this.alert.message = 'Please select atleast one cuisine';
      this.alert.type = 'warning';
      modalRef.componentInstance.alert = this.alert;
      return;
    };

    let restrict = "";
    if (this.res.length > 0) {
      restrict = this.res[0];
      for (let i = 1; i < this.res.length; i++)
        restrict = restrict + ',' + this.res[i];
    }

    this.dishDetails.Cuisine = cusine;
    this.dishDetails.Restrictions = restrict;
    // this.masterService.totalCost += this.dishDetails.Price;
    console.log(this.masterService.totalCost);

    if (this.dishDetails.Category_Type == 2) {
      // nonveg
      if (restrict == "")
        this.masterService.totalCost += this.masterService.searchObj.nonVegAttnd * this.dishDetails.Price;
      else
        this.masterService.totalCost += Math.ceil(1 / 4 * this.masterService.searchObj.nonVegAttnd) * this.dishDetails.Price;

    } else if (this.dishDetails.Category_Type == 1) {
      /* restricted service functionality */
      // veg people
      console.log(this.res, this.res.indexOf('Only for vegetarian'))
      if (this.res.length == 0)
        this.masterService.totalCost += this.masterService.totalAttendees * this.dishDetails.Price;
      else if (this.res.indexOf('Only for vegetarian') != -1)
        this.masterService.totalCost += this.masterService.searchObj.vegAttnd * this.dishDetails.Price;
      else if (this.res.indexOf('Mostly for vegetarian(50% of total Attendees)') != -1)
        this.masterService.totalCost += (this.masterService.searchObj.vegAttnd + Math.ceil(1 / 2 * this.masterService.searchObj.nonVegAttnd)) * this.dishDetails.Price;
      else
        this.masterService.totalCost += Math.ceil(1 / 4 * this.masterService.totalAttendees) * this.dishDetails.Price;
    } else {
      this.masterService.totalCost += this.masterService.totalAttendees * this.dishDetails.Price;
    }


    console.log(this.masterService.totalCost);
    this.masterService.selectedDishArr.push(this.dishDetails);
    var selectedDish = JSON.stringify(this.masterService.selectedDishArr);
    localStorage.setItem("cost", this.masterService.totalCost.toString());
    localStorage.setItem("selDises", selectedDish);
    this.cus = [];
    this.res = [];
    this.activeModal.close();
  }

  isCusChecked(cus) {
    if (this.cus.length) {
      return this.cus.indexOf(cus) == -1 ? false : true;
    }
    return false;
  }

  isResChecked(res) {
    if (this.res.length) {
      return this.res.indexOf(res) == -1 ? false : true;
    }
    return false;
  }

  getArr(str: string) {
    if (str != undefined) {
      if (str.includes(","))
        return str.split(",");
      else if (str != "") {
        let arr = [];
        arr.push(str);
        return arr;
      } else
        return [];
    }

    return [];
  }

  getCusines() {
    if (this.dishDetails != undefined) {
      if (this.dishDetails.Cuisine.includes(","))
        return this.dishDetails.Cuisine.split(",");
      else if (this.dishDetails.Cuisine != "") {
        let arr = [];
        arr.push(this.dishDetails.Cuisine);
        return arr;
      } else
        return [];
    }

    return [];
  }
  onReschecked(evt) {
    if (evt.target.checked) {
      this.res.pop();
      this.res.push(evt.target.value);
    } else {
      this.res.splice(this.res.indexOf(evt.target.value), 1);
    }
  }

  onCusChecked(evt) {
    if (evt.target.checked) {
      this.cus.push(evt.target.value);
    } else {
      this.cus.splice(this.cus.indexOf(evt.target.value), 1);

    }
  }

  update() {

  }
}
