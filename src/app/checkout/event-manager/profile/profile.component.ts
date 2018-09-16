import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  onCrossClose() {
    this.activeModal.dismiss();
  }

}
