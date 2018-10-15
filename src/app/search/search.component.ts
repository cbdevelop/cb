import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { SigninComponent } from '../shared/signin/signin.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('shead') header;
  isCollapsed = false;
  constructor( private signinModel: NgbModal ) { 
    
  }

  ngOnInit() {
    // console.log(this.header);
    // this.header.header.nativeElement.classList.add('staticHead');
    // this.header.header.nativeElement.classList.add('scrollAct');
    
  }

  // Sign-in Open
  openSign() {
    this.signinModel.open(SigninComponent);
  }

}
