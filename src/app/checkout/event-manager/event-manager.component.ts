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
        this.getReviews();

      }
    );

  }

  getReviews() {
    this.masterObj.getJSONofManagerReviews().subscribe(
      (data) => {
        this.masterObj.masterManagerReviews = data;
        for (let i = 0; i < this.masterObj.masterManagerReviews.length; i++) {

          this.masterObj.masterManagerReviews[i].Rating = (this.masterObj.masterManagerReviews[i].serving_time + this.masterObj.masterManagerReviews[i].presentation) / 2;
          //
          // this.masterObj.eventManagerList[i].Rating= (this.masterObj.eventManagerList[i].serving_time + this.masterObj.eventManagerList[i].presentation)/2
        }
        console.log(data);
        for (let j = 0; j < this.masterObj.eventManagerList.length; j++) {

          let arr = this.masterObj.masterManagerReviews.filter(x => x.Event_manager_id == this.masterObj.eventManagerList[j].id)

          for (let k = 0; k < arr.length; k++) {
            this.masterObj.eventManagerList[j].Rating += arr[k].Rating;
            this.masterObj.eventManagerList[j].serving_time += arr[k].serving_time;
            this.masterObj.eventManagerList[j].presentation += arr[k].presentation;
          }
          this.masterObj.eventManagerList[j].presentation = this.masterObj.eventManagerList[j].presentation /(arr.length+1);
          this.masterObj.eventManagerList[j].serving_time = this.masterObj.eventManagerList[j].serving_time /(arr.length+1);
          this.masterObj.eventManagerList[j].Rating = this.masterObj.eventManagerList[j].Rating /arr.length;
        }
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
