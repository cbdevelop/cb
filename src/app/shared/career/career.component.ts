import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SigninComponent } from '../signin/signin.component';
import { PositionsComponent } from './positions/positions.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  @ViewChild("head") header;
  isCollapsed = false;
  constructor(private activeModel: NgbModal) { }

  ngOnInit() {
  }

  // Sign-in Open
  openSign() {
    this.activeModel.open(SigninComponent);
  }
  openPositions(){
    
  }
  // Positions Open
  // openPositions() {
  //   this.activeModel.open(PositionsComponent);
  // }

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
