import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { CommentsComponent } from '../../shared/comments/comments.component';
import { MobilePreviewComponent } from '../components/mobile-preview/mobile-preview.component';


@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css']
})
export class EventManagerComponent implements OnInit {

  constructor(
    public masterObj: MasterService,
    private router: Router,
    private alertObj: AlertsService,
    private commentService: NgbModal,
  ) { }

  ngOnInit() {
    this.masterObj.chef_eventmanager_flag = 'event';
    this.masterObj.getJSONofEventManagers().subscribe(
      data => {
        this.masterObj.eventManagerList = data;
        console.log(data);
      }
    )
  }

  onproceed() {
    console.log(this.masterObj.evntManagerSelFlag, this.masterObj.selectedEvtManager);
    if (this.masterObj.evntManagerSelFlag || this.masterObj.selectedEvtManager.length) {
      this.router.navigate(['./payment']);
    } else {
      this.alertObj.openAlert({ message: 'Please Select Event manager or confirm that you can manage this event without a event maganer', type: 'warning' })
    }
  }

  onCommentPopup() {
    this.commentService.open(CommentsComponent);
  }

  opencat() {
    this.commentService.open(MobilePreviewComponent);
  }
}
