import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from '../profile/profile.component';
import { AddMoreComponent } from '../addMore/addMore.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  checkboxValue: boolean = false;

  constructor( private eventService: NgbModal ) { }

  ngOnInit() {
  }

  eventProfile() {
    this.eventService.open(ProfileComponent);
  }

  openAddMore() {
    this.eventService.open(AddMoreComponent);
  }

}
