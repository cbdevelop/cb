import { Component, OnInit, HostListener } from '@angular/core';
import { MasterService } from '../../services/master.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChefCatPopupComponent } from '../chef-cat-popup/chef-cat-popup.component';
import { Menu } from '../../shared/models/menu.mode';
@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  all_categories:Menu[]
  dishes: any = []
  constructor(
    private service: MasterService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    console.log(this.service.alldishes);
    this.all_categories = this.service.alldishes;
  }

  openchef(menucategoryid,disId) {

    const modalRef = this.modalService.open(ChefCatPopupComponent);
    modalRef.componentInstance.cat_id = menucategoryid;
    modalRef.componentInstance.dishId = disId;
  }


}
