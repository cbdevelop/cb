import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-preview',
  templateUrl: './mobile-preview.component.html',
  styleUrls: ['./mobile-preview.component.css']
})
export class MobilePreviewComponent implements OnInit {

  constructor(public masterObj:MasterService,
    private activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }
  remove(cat_id,id){
    if (cat_id == 1) {
      this.masterObj.selectedDishes.best.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 2) {
      this.masterObj.selectedDishes.starter.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 3) {
      this.masterObj.selectedDishes.main.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 4) {
      this.masterObj.selectedDishes.biryani.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 5) {
      this.masterObj.selectedDishes.beverges.splice(this.masterObj.selectedDishes.best.indexOf(id) , 1);
    } else if (cat_id == 6) {
    }
    // this.masterObj.selectedDishes.splice(this.masterObj.selectedDishes.indexOf(id) , 1);
    console.log(this.masterObj.selectedDishes);
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onCheckout(){
    
  }
}
