import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../../services/master.service';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  managerDetails: any = {};
  @Input() id;
  reviewsArr =[];
  constructor(public activeModal: NgbActiveModal,
    private masterObj: MasterService,
    private alertsObj: AlertsService) { }

  ngOnInit() {
    this.managerDetails = this.masterObj.eventManagerList.filter(d => d.id == this.id)[0];
    
    // this.managerDetails.Rating = (this.managerDetails.serving_time + this.managerDetails.presentation)/2;
    this.reviewsArr = this.masterObj.masterManagerReviews.filter(x=> x.Event_manager_id == this.id);
    console.log(this.managerDetails,this.reviewsArr );
  }

  onCrossClose() {
    this.activeModal.dismiss();
  }

  addManager() {
    
    if (this.masterObj.evntManagerSelFlag) {
      this.alertsObj.openAlert({ message: 'Please uncheck check box ', type: 'warning' });
    } else {
      console.log(this.masterObj.totalCost, this.managerDetails.cost);
      let index = this.masterObj.selectedEvtManager.findIndex(x => x.id == this.id);
      if (index == -1) {
        this.masterObj.totalCost -= this.masterObj.eventMangerCost;
        this.masterObj.eventMangerCost += parseInt(this.managerDetails.cost, 10);
        this.masterObj.totalCost += this.masterObj.eventMangerCost;
        this.masterObj.selectedEvtManager.push(this.managerDetails);
        var selManager = JSON.stringify(this.masterObj.selectedEvtManager);
        localStorage.setItem("selManager", selManager);
        localStorage.setItem("eventMangerCost", this.masterObj.eventMangerCost.toString());
        localStorage.setItem("cost", this.masterObj.totalCost.toString());
        this.activeModal.dismiss();
      } else {
        alert('the manager already added');
        this.alertsObj.openAlert({ message: 'this manager already added', type: 'warning' });
      }
    }
  }

}
