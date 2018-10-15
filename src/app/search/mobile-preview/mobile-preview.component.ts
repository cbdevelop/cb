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
    private userSerObj:UserService,
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
      if(this.masterObj.selCity.ID == 6){

      }else 
        this.router.navigate(['../chef'], { relativeTo: this.route });
    }

  }
}
