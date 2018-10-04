import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from '../profile/profile.component';
import { AddMoreComponent } from '../addMore/addMore.component';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  checkboxValue: boolean = false;

  constructor(
     private eventService: NgbModal,
  public masterobj:MasterService
  ) { }

  ngOnInit() {
  }

  eventProfile(id) {
    const modalRef =this.eventService.open(ProfileComponent);
    modalRef.componentInstance.id = id;
  }

  openAddMore() {
    this.eventService.open(AddMoreComponent);
  }

}
