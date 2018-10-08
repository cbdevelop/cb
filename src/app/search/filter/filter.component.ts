import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import { ModifySearchComponent } from '../../shared/modify-search/modify-search.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  menuList = [];
  selectedItems = [];
  settings = {};

 

  constructor( 
    public modifiedService: NgbModal, 
    public config: NgbPopoverConfig ) {

    // customize default values of popovers used by this component tree
    config.placement = 'bottom';
    config.triggers = 'click';
  }
  ngOnInit() {
    // this.all_categories = this.service.alldishes;
    this.menuList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];
   
    this.settings = {
      singleSelection: false,
      text: "+ More",
      badgeShowLimit: 2,
      enableSearchFilter: true
    };
  }
  

  menuSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  menuDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  SelectAll(items: any) {
    console.log(items);
  }
  DeSelectAll(items: any) {
    console.log(items);
  }

  // modified Search
  openModified() {
    this.modifiedService.open(ModifySearchComponent);

  }

  onlyGoldchef() {

  }

  onlyNonveg() {
    
  }


}
