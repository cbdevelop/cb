import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../../services/master.service';
import { UserService } from '../../../services/user_service/user.service';
import { AlertsService } from '../../../services/alerts.service';



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
    private userSerObj: UserService,
    private activeModal: NgbActiveModal,
  private alertObj:AlertsService) { }

  ngOnInit() {
  }



  onClose() {
    this.activeModal.dismiss();
  }


  onCheckout() {
    if (this.userSerObj.userId) {

    }
    if (this.masterObj.chef_eventmanager_flag == 'Chef') {
      this.router.navigate(['./manager']);
      
    } else {
      if (this.masterObj.evntManagerSelFlag || this.masterObj.selectedEvtManager.length) {
        this.router.navigate(['./payment']);
      } else {
        this.alertObj.openAlert({ message: 'Please Select Event manager or confirm that you can manage this event without a event maganer', type: 'warning' })
      }
    }

    this.activeModal.close();


  }
}
