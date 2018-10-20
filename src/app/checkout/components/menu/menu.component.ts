import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CommentsComponent } from '../../../shared/comments/comments.component';
import { PromocodeComponent } from '../promocode/promocode.component';
import { MasterService } from '../../../services/master.service';
import { AlertsService } from '../../../services/alerts.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('chefHead') chefHead;

  constructor(
    private alertObj: AlertsService,
    private commentService: NgbModal,
    public masterObj: MasterService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  // Comments Model Popup
  onCommentPopup() {
    this.commentService.open(CommentsComponent);
  }

  // Promocode Popup
  openPromo() {
    this.commentService.open(PromocodeComponent)
  }

  onproceed() {
    if (this.masterObj.chef_eventmanager_flag == 'Chef') {
      this.router.navigate(['./manager']);
    } else {


      console.log(this.masterObj.evntManagerSelFlag, this.masterObj.selectedEvtManager);
      if (this.masterObj.evntManagerSelFlag || this.masterObj.selectedEvtManager.length) {
        this.router.navigate(['./payment']);
      } else {
        this.alertObj.openAlert({ message: 'Please Select Event manager or confirm that you can manage this event without a event maganer', type: 'warning' })
      }
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number > 100) {
      this.chefHead.nativeElement.classList.add('chefHeadFixed');
    } else {
      this.chefHead.nativeElement.classList.remove('chefHeadFixed');
    }
  };

}
