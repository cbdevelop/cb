import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MasterService } from '../../services/master.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
 
  remove(cat_id, index) {
    if (cat_id == 1) {
      this.masterObj.totalCost -= this.masterObj.selectedDishes.best[index].cost;
      this.masterObj.selectedDishes.best.splice(index, 1);
    } else if (cat_id == 2) {
      this.masterObj.totalCost -= this.masterObj.selectedDishes.starter[index].cost;
      this.masterObj.selectedDishes.starter.splice(index, 1);
    } else if (cat_id == 3) {
      this.masterObj.totalCost -= this.masterObj.selectedDishes.main[index].cost;
      this.masterObj.selectedDishes.main.splice(index, 1);
    } else if (cat_id == 4) {
      this.masterObj.totalCost -= this.masterObj.selectedDishes.biryani[index].cost;
      this.masterObj.selectedDishes.biryani.splice(index, 1);
    } else if (cat_id == 5) {
      this.masterObj.totalCost -= this.masterObj.selectedDishes.beverges[index].cost;
      this.masterObj.selectedDishes.beverges.splice(index, 1);
    } else if (cat_id == 6) {
    }

  }

  getcus(cusines,restricted_ser) {
    var sub="";
    if(cusines.length){
      sub = cusines[0];
      for(var i=1;i<cusines.length;i++){
        sub = sub+"," + cusines[i];
      }
    }

    if(restricted_ser.length){
      sub = sub=="" ? restricted_ser[0] : ","+restricted_ser[0];
      for(var i=1;i<cusines.length;i++){
        sub = sub+"," + restricted_ser[i];
      }
    }

    return sub == "" ? "" : "("+ sub +")";
  } 

  onClose() {
    this.activeModal.dismiss();
  }

  onCheckout() {
    if (this.masterObj.selectedDishes.best.length || this.masterObj.selectedDishes.starter.length ||
      this.masterObj.selectedDishes.main.length || this.masterObj.selectedDishes.biryani.length ||
      this.masterObj.selectedDishes.beverges.length) {
      this.router.navigate(['../chef'], { relativeTo: this.route });
    }
  }
}
