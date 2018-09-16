import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChefProfileComponent } from '../chef-profile/chef-profile.component';


@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {

  constructor( private chefService: NgbModal ) { }

  ngOnInit() {
  }

  chefProfile() {
    this.chefService.open(ChefProfileComponent);
  }

}
