import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SigninComponent } from '../signin/signin.component';


@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  isCollapsed = false;
  constructor( private signinModel: NgbModal ) { }

  ngOnInit() {
  }

   // Sign-in Open
   openSign() {
    this.signinModel.open(SigninComponent);
  }

}
