import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChefCatPopupComponent } from '../chef-cat-popup/chef-cat-popup.component';
import { Menu } from '../../shared/models/menu.mode';
import { OrderPreviewComponent } from '../order-preview/order-preview.component';
import { MobilePreviewComponent } from '../mobile-preview/mobile-preview.component';
import { CommentsComponent } from '../../shared/comments/comments.component';
@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  all_categories: Menu[]
  dishes: any = []
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MasterService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    this.all_categories = this.service.alldishes;
    console.log(this.all_categories);
  }

  onSectionChange(sectionId: string) {
    this.service.searchmenu_selection = sectionId;

  }

  openchef(menucategoryid: number, disId) {
    console.log(this.isSelected(menucategoryid, disId));
    if (this.isSelected(menucategoryid, disId)) {

    } else {


      var arr = this.all_categories[menucategoryid - 1].dishes.filter(x => x.dishId == disId)
      if (arr[0].cusines.length) {
        const modalRef = this.modalService.open(ChefCatPopupComponent);
        modalRef.componentInstance.cat_id = menucategoryid;
        modalRef.componentInstance.dishId = disId;
      } else if (arr.length) {
        // {ca  menucategoryid,arr[0]}
        arr[0].restricted_ser = [];
        this.service.totalCost += arr[0].cost;
        console.log(this.service.totalCost);
        if (menucategoryid == 1) {
          this.service.selectedDishes.best.push(arr[0]);
        } else if (menucategoryid == 2) {
          this.service.selectedDishes.starter.push(arr[0]);
        } else if (menucategoryid == 3) {
          this.service.selectedDishes.main.push(arr[0]);
        } else if (menucategoryid == 4) {
          this.service.selectedDishes.biryani.push(arr[0]);
        } else if (menucategoryid == 5) {
          this.service.selectedDishes.beverges.push(arr[0]);
        } else if (menucategoryid == 6) {
        }


      }
    }

  }

  /* check if laredy selected this dish */
  isSelected(menucategoryid, dishId) {
    if (menucategoryid == 1) {
      return this.service.selectedDishes.best.findIndex(d => d.dishId == dishId) == -1 ? false : true;
    } else if (menucategoryid == 2) {
      return this.service.selectedDishes.starter.findIndex(d => d.dishId == dishId) ==-1 ? false : true;
    } else if (menucategoryid == 3) {
      return this.service.selectedDishes.main.findIndex(d => d.dishId == dishId) ==-1 ? false : true;
    } else if (menucategoryid == 4) {
      return this.service.selectedDishes.biryani.findIndex(d => d.dishId == dishId) ==-1 ? false : true;
    } else if (menucategoryid == 5) {
      return this.service.selectedDishes.beverges.findIndex(d => d.dishId == dishId) ==-1 ? false : true;
    } else if (menucategoryid == 6) {
    }
  }
  openRes(menucategoryid, disId) {

    const modalRef = this.modalService.open(ChefCatPopupComponent);
    modalRef.componentInstance.cat_id = menucategoryid;
    modalRef.componentInstance.dishId = disId;
  }

  openCart() {
    this.modalService.open(MobilePreviewComponent);
  }

  openComment() {

    this.modalService.open(CommentsComponent);

  }

  onCheckout() {
    if (this.service.selectedDishes.best.length || this.service.selectedDishes.starter.length ||
      this.service.selectedDishes.main.length || this.service.selectedDishes.biryani.length ||
      this.service.selectedDishes.beverges.length) {
      this.router.navigate(['../chef'], { relativeTo: this.route });
    }
  }

}
