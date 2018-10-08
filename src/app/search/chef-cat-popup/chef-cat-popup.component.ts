import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';
import { Dish, DishModel } from '../../shared/models/dish.model';
import { Menu } from '../../shared/models/menu.mode';

@Component({
  selector: 'app-chef-cat-popup',
  templateUrl: './chef-cat-popup.component.html',
  styleUrls: ['./chef-cat-popup.component.css']
})
export class ChefCatPopupComponent implements OnInit {

  @Input() cat_id;
  @Input() dishId;

  res = [];
  cus = [];
  btnText = 'Save';
  dishDetails: DishModel;

  restrictArr = [
    'Only for vegetarian', 'Mostly for vegetarian', 'Only for main table(25% of total Attendees)'
  ];
  constructor(
    public activeModal: NgbActiveModal,
    private masterService: MasterService
  ) {

  }

  ngOnInit() {

    this.dishDetails = this.findDish();

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
    if(index != -1)
      this.masterService.selectedDishArr.splice(index);
    let cusine = "";
    if (this.cus.length > 0) {
      cusine = this.cus[0];
      for (let i = 1; i < this.cus.length; i++)
        cusine = cusine + ',' + this.cus[i];
    } else {
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
    this.masterService.totalCost += this.dishDetails.Price;
    this.masterService.selectedDishArr.push(this.dishDetails);
    var selectedDish = JSON.stringify(this.masterService.selectedDishArr);
    localStorage.setItem("cost", this.masterService.totalCost.toString());
    localStorage.setItem("selDises", selectedDish);
    this.cus =[];
    this.res =[];
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
