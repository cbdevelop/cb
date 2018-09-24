import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';
import { Dish } from '../../shared/models/dish.model';
import { Menu } from '../../shared/models/menu.mode';

@Component({
  selector: 'app-chef-cat-popup',
  templateUrl: './chef-cat-popup.component.html',
  styleUrls: ['./chef-cat-popup.component.css']
})
export class ChefCatPopupComponent implements OnInit {

  @Input() cat_id;
  @Input() dishId;

  res=[];
  cus=[];

  dishDetails: Dish;
  constructor(
    public activeModal: NgbActiveModal,
    private masterService: MasterService
  ) {
    
  }

  ngOnInit() {

    this.dishDetails = this.findDish();
    
  }


  findDish() {
    var arr:Menu[] = this.masterService.alldishes.filter(x => x.dishTypeId == this.cat_id);
    return arr[0].dishes.filter(x => x.dishId == this.dishId)[0]
  }

  oncancel() {
    this.activeModal.dismiss();
  }

  onAdd() {
    console.log(this.masterService.totalCost);
    this.dishDetails.cusines = this.cus;
    this.dishDetails.restricted_ser = this.res;
    this.masterService.totalCost += this.dishDetails.cost;
    if (this.cat_id == 1) {
      this.masterService.selectedDishes.best.push(this.dishDetails);
    } else if (this.cat_id == 2) {
      this.masterService.selectedDishes.starter.push(this.dishDetails);
    } else if (this.cat_id == 3) {
      this.masterService.selectedDishes.main.push(this.dishDetails);
    } else if (this.cat_id == 4) {
      this.masterService.selectedDishes.biryani.push(this.dishDetails);
    } else if (this.cat_id == 5) {
      this.masterService.selectedDishes.beverges.push(this.dishDetails);
    } else if (this.cat_id == 6) {
    }
    this.activeModal.close();
  }

  onReschecked(evt) {
    console.log(evt);
    if(evt.target.checked){
      this.res.push(evt.target.value);
    }else {
    this.res.splice(this.res.indexOf(evt.target.value),1);
    }
  }

  onCusChecked(evt) {
    console.log(evt);
    if(evt.target.checked){
      this.cus.push(evt.target.value);
    }else {
      this.cus.splice(this.cus.indexOf(evt.target.value),1);
     
    }
    console.log(this.cus);
  }
}
