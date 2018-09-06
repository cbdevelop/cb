import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

import { NgbPopoverConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifySearchComponent } from '../modify-search/modify-search.component';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [NgbPopoverConfig]
})
export class MenuComponent implements OnInit {

  menuList = [];
  selectedItems = [];
  settings = {};

  @ViewChild('cheftop') cheftop;

  constructor(  private service: MasterService,public modifiedService: NgbModal, public config: NgbPopoverConfig) {

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

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number > 100) {
      this.cheftop.nativeElement.classList.add('chefHeadFixed');
    } else {
      this.cheftop.nativeElement.classList.remove('chefHeadFixed');
    }
  };

}
