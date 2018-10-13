import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import { ModifySearchComponent } from '../../shared/modify-search/modify-search.component';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  menuList = [];
  selectedItems = [];
  settings = {};

  nonVegFlag = false;
  goldFlag = true;
  constructor(
    public masterObj: MasterService,
    public modifiedService: NgbModal,
    public config: NgbPopoverConfig) {

    // customize default values of popovers used by this component tree
    config.placement = 'bottom';
    config.triggers = 'click';
  }
  ngOnInit() {
    // this.all_categories = this.service.alldishes;
    this.menuList = [
      { 'id': 1, 'itemName': 'India' },
      { 'id': 2, 'itemName': 'Singapore' },
      { 'id': 3, 'itemName': 'Australia' },
      { 'id': 4, 'itemName': 'Canada' },
      { 'id': 5, 'itemName': 'South Korea' },
      { 'id': 6, 'itemName': 'Germany' },
      { 'id': 7, 'itemName': 'France' },
      { 'id': 8, 'itemName': 'Russia' },
      { 'id': 9, 'itemName': 'Italy' },
      { 'id': 10, 'itemName': 'Sweden' }
    ];

    this.settings = {
      singleSelection: false,
      text: '+ More',
      badgeShowLimit: 2,
      enableSearchFilter: true
    };
  }


  menuSelect(item: any) {

  }
  menuDeSelect(item: any) {

  }

  SelectAll(items: any) {
  }
  DeSelectAll(items: any) {

  }

  // modified Search
  openModified() {
    this.modifiedService.open(ModifySearchComponent);

  }

  onlyGoldchef() {
    this.nonVegFlag = !this.nonVegFlag;
  }

  onlyNonveg() {
    console.log(this.nonVegFlag);
    this.nonVegFlag = !this.nonVegFlag;
    if (this.nonVegFlag) {
      this.masterObj.dishArray = this.masterObj.masterDish.filter(x => x.Category_Type === 2);
    } else {
      this.masterObj.dishArray = this.masterObj.masterDish;
    }

    this.masterObj.startersArray = this.masterObj.getDishesByMenuID(1);
    this.masterObj.snackArray = this.masterObj.getDishesByMenuID(2);
    this.masterObj.beverges_drinkArray = this.masterObj.getDishesByMenuID(3);
    this.masterObj.breadsArray = this.masterObj.getDishesByMenuID(4);
    this.masterObj.soupArray = this.masterObj.getDishesByMenuID(5);
    this.masterObj.saladsArray = this.masterObj.getDishesByMenuID(6);
    this.masterObj.MainCourseArray = this.masterObj.getDishesByMenuID(7);
    this.masterObj.desertsArray = this.masterObj.getDishesByMenuID(8);
    this.masterObj.stallsArray = this.masterObj.getDishesByMenuID(9);
  }


}
