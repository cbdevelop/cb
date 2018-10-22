import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from '../profile/profile.component';
import { AddMoreComponent } from '../addMore/addMore.component';
import { MasterService } from '../../../services/master.service';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  evntManagerSelFlag:boolean = false;
  constructor(
    private eventService: NgbModal,
    public masterobj: MasterService,
    private alertObj:AlertsService
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem('noManager'));
    this.evntManagerSelFlag = (localStorage.getItem('noManager') == 'yes' )? true : false;
    this.masterobj.evntManagerSelFlag = this.evntManagerSelFlag;
  }

  eventProfile(id) {
    const modalRef = this.eventService.open(ProfileComponent);
    modalRef.componentInstance.id = id;
  }

  openAddMore() {
    this.eventService.open(AddMoreComponent);
  }
  isEvtSelected(id) {
    let index = this.masterobj.selectedEvtManager.findIndex(x => x.id == id);
    return index == -1 ? false : true;

  }
  onNoManager() {
    this.evntManagerSelFlag = !this.evntManagerSelFlag;
    
    if (this.evntManagerSelFlag) {
      if (this.masterobj.selectedEvtManager.length) {
        localStorage.setItem('selManager', '');
        localStorage.setItem('noManager', 'yes');
        this.masterobj.selectedEvtManager = [];
        this.masterobj.totalCost -= this.masterobj.eventMangerCost;
        this.masterobj.eventMangerCost=0;
        this.alertObj.openAlert({message:'selected event managers will be removed',type:'warning'});
        // if (confirm('Do you Remove selected Event managers')) {
         
        // } else {
          
        //   this.evntManagerSelFlag = !this.evntManagerSelFlag;
        //   console.log(this.evntManagerSelFlag );
        // }
      }

    } else{
      localStorage.setItem('noManager', 'no');

    }
    
      this.masterobj.evntManagerSelFlag = this.evntManagerSelFlag;
  }
}
