import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  managerDetails: any = {};
  @Input() id;
  constructor(public activeModal: NgbActiveModal,
    private masterObj: MasterService) { }

  ngOnInit() {
    this.managerDetails = this.masterObj.eventManagerList.filter(d => d.id == this.id)[0];

  }

  onCrossClose() {
    this.activeModal.dismiss();
  }

  addManager() {
    console.log(this.masterObj.totalCost, this.managerDetails.Price);
    
    let index = this.masterObj.selectedEvtManager.findIndex(x => x.id == this.id);
    if (index == -1) {
      this.masterObj.totalCost += this.managerDetails.Price;
      this.masterObj.selectedEvtManager.push(this.managerDetails);
      var selManager = JSON.stringify(this.masterObj.selectedEvtManager);
      localStorage.setItem("selManager", selManager);
      localStorage.setItem("cost", this.masterObj.totalCost.toString());
      this.activeModal.dismiss();
    } else {
      alert('the manager already added');
    }
  }

}
