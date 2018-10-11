import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SigninComponent } from '../signin/signin.component';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  isCollapsed = false;
  constructor( private signinModel: NgbModal ) { }

  ngOnInit() {
  }

   // Sign-in Open
   openSign() {
    this.signinModel.open(SigninComponent);
  }

}
