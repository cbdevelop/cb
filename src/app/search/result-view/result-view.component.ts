import { Component, OnInit, HostListener } from '@angular/core';
import { MasterService } from '../../services/master.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChefCatPopupComponent } from '../chef-cat-popup/chef-cat-popup.component';
@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {


  dishes: any = []
  constructor(
    private service: MasterService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    console.log(this.service);
    this.dishes = this.service.dishes;
  }

  openchef(id) {

    const modalRef = this.modalService.open(ChefCatPopupComponent);
    modalRef.componentInstance.id = id;
  }


}
