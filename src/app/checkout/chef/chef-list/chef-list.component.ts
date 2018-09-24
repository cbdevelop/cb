import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChefProfileComponent } from '../chef-profile/chef-profile.component';
import { MasterService } from '../../../services/master.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit,AfterViewInit {

  chefList = [];
  length=0;
  constructor(
    private chefService: NgbModal,
    public masterObj: MasterService
  ) {

    // this.chefList = this.masterObj.ChefData.filter(x => x.From == "Hyderabad");
    // this.masterObj.filteredchefList=this.chefList;
    // this.getlist();
  }

  getlist(){
    var min = this.masterObj.selectedDishes.best.length+ this.masterObj.selectedDishes.starter.length+ 
    this.masterObj.selectedDishes.main.length+ this.masterObj.selectedDishes.biryani.length;

    min = min < 3 ? 3 : 5;
    this.length = this.masterObj.randomInt(1,min);

    for(var i =0;i<this.length;i++){
      var index = this.masterObj.randomInt(1,this.masterObj.ChefData.length);
      this.chefList.push(this.masterObj.ChefData[index]);
    }
    
  }

  ngOnInit() {
    console.log(this.chefList);
    this.chefList = this.masterObj.filteredchefList 
  }

  ngAfterViewInit() {
    this.chefList = this.masterObj.filteredchefList ;
  }

  chefProfile(id) {

    const modalRef = this.chefService.open(ChefProfileComponent);
    modalRef.componentInstance.che_index = id;

  }

}
