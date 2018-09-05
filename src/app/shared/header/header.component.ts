import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from '../signin/signin.component';
import { User } from '../models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User[];

  @ViewChild("head") header;

  constructor( private signinModel: NgbModal ) { }

  ngOnInit() {
  }

  // Sign-in
  openSign() {
    this.signinModel.open(SigninComponent);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number >= 100) {
      this.header.nativeElement.classList.add("scrollAct");
      // document.getElementById('header').classList.add("scrollAct");
    } else if (number < 200) {
      // document.getElementById('header').classList.remove("scrollAct");
      this.header.nativeElement.classList.remove("scrollAct");
    }
  }

}
