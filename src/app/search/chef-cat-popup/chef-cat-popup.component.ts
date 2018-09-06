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

  dishDetails: Dish;
  constructor(
    public activeModal: NgbActiveModal,
    private masterService: MasterService
  ) {
    console.log(this.cat_id,this.dishId)
  }

  ngOnInit() {

    this.dishDetails = this.findDish();
    console.log(this.cat_id, this.dishId,this.dishDetails);
  }


  findDish() {
    var arr:Menu[] = this.masterService.alldishes.filter(x => x.dishTypeId == this.cat_id);
    console.log(arr);
    
    return arr[0].dishes.filter(x => x.dishId == this.dishId)[0]
  }

  oncancel() {
    this.activeModal.dismiss();
  }

  onAdd() {
    this.masterService.selectedDishes.push(this.dishDetails);
    this.activeModal.close();
  }

}
