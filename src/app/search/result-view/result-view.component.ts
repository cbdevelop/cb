import { Component, OnInit, HostListener } from '@angular/core';
import { MasterService } from '../../services/master.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChefCatPopupComponent } from '../chef-cat-popup/chef-cat-popup.component';
import { Menu } from '../../shared/models/menu.mode';
import { CommentsComponent } from '../../shared/index';
import { OrderPreviewComponent } from '../order-preview/order-preview.component';
import { MobilePreviewComponent } from '../mobile-preview/mobile-preview.component';
@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  all_categories: Menu[]
  dishes: any = []
  constructor(
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

  openchef(menucategoryid, disId) {
    var arr = this.all_categories[menucategoryid-1].dishes.filter(x => x.dishId == disId)
    if(arr[0].cusines.count){
      const modalRef = this.modalService.open(ChefCatPopupComponent);
      modalRef.componentInstance.cat_id = menucategoryid;
      modalRef.componentInstance.dishId = disId;
    }else {
      this.service.selectedDishes.push(arr[0]);
    
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


}
