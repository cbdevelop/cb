import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.component.html',
  styleUrls: ['./chef-profile.component.css']
})
export class ChefProfileComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  onCrossClose() {
    this.activeModal.dismiss();
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onChange() {
    this.activeModal.close();
  }

}
