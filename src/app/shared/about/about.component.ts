import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SigninComponent } from '../signin/signin.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    @ViewChild("head") header;
    isCollapsed = false;
  constructor( private signinModel: NgbModal ) { }

  ngOnInit() {
  }

   // Sign-in Open
   openSign() {
    this.signinModel.open(SigninComponent);
  }

  // header scroll
  @HostListener("window:scroll", [])
onWindowScroll() {
  const number = window.pageYOffset || window.scrollY || 0;

  if (number >= 100) {
    this.header.nativeElement.classList.add("scrollAct");
  } else if (number < 200) {
    this.header.nativeElement.classList.remove("scrollAct");
  }
}

}
