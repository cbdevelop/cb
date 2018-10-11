import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { searchModel, MasterService } from '../services/master.service';
import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModifySearchComponent } from '../shared/modify-search/modify-search.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchObj: searchModel = { location: [], serviceType: [], nonVegAttnd: null, vegAttnd: null, datetime: new Date() };

  public homeForm: FormGroup;

  location = [];

  serviceType = [];

  settings = {};
  session = "dinner";
  barwidth = 0
  cntevnt = 0;
  eventServed = 1254;

  cntchef = 0;
  no_chefs = 470;
  cntmanager = 0;
  no_eventManager = 210;
  cntusers = 0;
  users = 2150;
  public spiedTags = [];

  private currentSection: string;


  constructor(
    private routerObj: Router,
    private fb: FormBuilder,
    public masterObj: MasterService,
    public modalService: NgbModal,
  ) {
    this.barwidth = 0;

    this.cntevnt = this.dancingNumbers(this.eventServed);
    this.cntchef = this.dancingNumbers(this.no_chefs);
    this.cntmanager = this.dancingNumbers(this.no_eventManager);
    this.cntusers = this.dancingNumbers(this.users);

  }

  callCounters() {

  }
  dancingNumbers(cnt) {
    this.barwidth = 0;

    let interval = setInterval(() => {
      this.barwidth += 10;
      if (this.barwidth >= cnt) clearInterval(interval);
    }, 10)
    return this.barwidth;
  }


  onSectionChange(sectionId: string) {
    this.masterObj.currentSection = sectionId;
    // if(sectionId =='')
    //   this
  }

  ngOnInit() {

    this.location = [
      { "id": 1, "itemName": "Ameerpet" },
      { "id": 2, "itemName": "Dilsuknagar" },
      { "id": 3, "itemName": "SR Nagar" },
      { "id": 4, "itemName": "Athapur" },
      { "id": 5, "itemName": "Koti" },
      { "id": 6, "itemName": "Khairathabad" },
      { "id": 7, "itemName": "Kothapet" },
      { "id": 8, "itemName": "Secundrabad" }
    ];

    this.serviceType = [
      { "id": 1, "itemName": "Buffet" },
      { "id": 2, "itemName": "Lunch" },
      { "id": 3, "itemName": "Dinner" }
    ];

    this.settings = {
      singleSelection: true,
      text: "Select",
      enableSearchFilter: true,
      showCheckbox: false
    };

    this.homeForm = this.fb.group({
      location: [[], Validators.required],
      serviceType: [null,  Validators.required],
      vegAttnd: [null, [ Validators.pattern('^[0-9]+[1-9]*$'),Validators.required]],
      nonVegAttnd: [null,[ Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]],
      datetime: ['', Validators.required]
    });

  }
  onlyNumberKey(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && event.keyCode !== 13 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  // Locations
  LocationSelect(item: any) {
    // console.log(item);
  }
  LocationDeSelect(item: any) {
    // console.log(item);
  }

  // Services
  ServiceSelect(item: any) {
    // console.log(item);
  }
  ServiceDeSelect(item: any) {
    // console.log(item);
  }
  getTotal() {
    this.masterObj.totalAttendees = 0;
    let Nveg: any = this.masterObj.searchObj.nonVegAttnd;
    let veg: any = this.masterObj.searchObj.vegAttnd;
    if ([null, ''].indexOf(Nveg) == -1) {
      this.masterObj.totalAttendees = this.masterObj.totalAttendees + parseInt(Nveg, 10);
    }
    if ([null, ''].indexOf(veg) == -1) {
      this.masterObj.totalAttendees = this.masterObj.totalAttendees + parseInt(veg, 10);
    }

    return this.masterObj.totalAttendees;
  }

  onSearch(evt) {

    console.log(this.masterObj.searchObj, this.homeForm);
    if (this.homeForm.valid) {
      this.masterObj.totalCost = 0;
      this.masterObj.selectedDishArr= [];
      var selectedDish = JSON.stringify(this.masterObj.selectedDishArr);

      localStorage.setItem("searchObj", JSON.stringify(this.masterObj.searchObj));
      this.routerObj.navigate(['../search']);
    }
  }

  onMobileSearch() {
    const modalref = this.modalService.open(ModifySearchComponent);
    modalref.componentInstance.page = "home";
  }
  /* @HostListener("window:scroll", ["$event"])
   onWindowScroll(event: any) {
       console.log('sad');
         let currentSection: string;
         const children = this._el.nativeElement.children;
         const scrollTop = event.target.scrollTop;
         const parentOffset = event.target.offsetTop;
         for (let i = 0; i < children.length; i++) {
             const element = children[i];
             if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                 if ((element.offsetTop - parentOffset) <= scrollTop) {
                     currentSection = element.id;
                 }
             }
         }
         if (currentSection !== this.currentSection) {
             this.currentSection = currentSection;
             this.masterObj.currentSection =currentSection;
         }
     }
     */
}
