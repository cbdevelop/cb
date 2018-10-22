import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// import { CommentsComponent } from '../../shared/comments/comments.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public masterObj: MasterService,
    private commentService: NgbModal) { }

  ngOnInit() {
  }

  remove(id, index) {
    console.log(this.masterObj.totalCost);
    let ind = this.masterObj.selectedDishArr.findIndex(x => x.id == id);
    if (ind !== -1) {
      console.log(this.masterObj.selectedDishArr);
      let arr = this.masterObj.selectedDishArr[ind];
      // this.masterObj.totalCost = this.masterObj.totalCost - arr.Price;

      if (arr.Category_Type == 2) {
        // nonveg
        if (arr.Restrictions == "")
          this.masterObj.totalCost -= this.masterObj.searchObj.nonVegAttnd * arr.Price;
        else
          this.masterObj.totalCost -= Math.ceil(1 / 4 * this.masterObj.searchObj.nonVegAttnd) * arr.Price;
      } else if (arr.Category_Type == 1) {
        /* restricted service functionality */
        // veg people
        //this.masterObj.totalCost -= this.masterObj.totalAttendees * arr.Price;
        if (arr.Restrictions == "")
          this.masterObj.totalCost -= this.masterObj.totalAttendees * arr.Price;
        else if( arr.Restrictions.includes('Only for vegetarian'))
          this.masterObj.totalCost -= this.masterObj.searchObj.vegAttnd * arr.Price;
        else if (arr.Restrictions.includes('Mostly for vegetarian(50% of total Attendees)') )
          this.masterObj.totalCost -= (this.masterObj.searchObj.vegAttnd + Math.ceil(1 / 2 * this.masterObj.searchObj.nonVegAttnd)) * arr.Price;
        else
          this.masterObj.totalCost -= Math.ceil(1 / 4 * this.masterObj.totalAttendees) * arr.Price;
      } else {
        this.masterObj.totalCost -= this.masterObj.totalAttendees * arr.Price;
      }
console.log(this.masterObj.totalCost);
      this.masterObj.selectedDishArr.splice(ind, 1);
      var selectedDish = JSON.stringify(this.masterObj.selectedDishArr);
      localStorage.setItem("cost", this.masterObj.totalCost.toString());
      localStorage.setItem("selDises", selectedDish);
    }
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
  // Comments Model Popup
  /*
  onCommentPopup() {
    this.commentService.open(CommentsComponent);
  }

  onCheckout() {
    if (this.masterObj.selectedDishArr.length) {
      this.router.navigate(['../chef'], { relativeTo: this.route });
    }
  }

  */

}
