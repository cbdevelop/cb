import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../../services/master.service';
import { UserService } from '../../../services/user_service/user.service';



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

 

  onClose() {
    this.activeModal.dismiss();
  }


  onCheckout() {
    if (this.userSerObj.userId) {

    }
    if (this.masterObj.selectedDishArr.length) {
      this.router.navigate(['../payment'], { relativeTo: this.route });
    }

  }
}
