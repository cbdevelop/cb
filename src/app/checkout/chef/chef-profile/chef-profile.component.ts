import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.component.html',
  styleUrls: ['./chef-profile.component.css']
})
export class ChefProfileComponent implements OnInit {

  @Input() che_index;
  chefDetails:any = [];
  reviews =[]
  constructor(
    public activeModal: NgbActiveModal,
    private masterObj: MasterService
  ) { 
   
  }

  ngOnInit() {
    this.chefDetails = this.masterObj.filteredchefList[this.che_index];
    console.log(this.chefDetails.Rating);
    this.reviews = this.masterObj.masterChefreviws.filter(x=> x.chef_id == this.chefDetails.id);
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

  changeChef() {

  }

}
