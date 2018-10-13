import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { SearchModel, MasterService } from '../services/master.service';
import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModifySearchComponent } from '../shared/modify-search/modify-search.component';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { alert } from '../shared/models/alert.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alert: alert= { type: 'success', message: '' };
  public searchObj: SearchModel = { location: [
  ], serviceType: [], nonVegAttnd: null, vegAttnd: null, datetime: new Date() };

  public homeForm: FormGroup;

  location = [  ];

  serviceType = [
   
  ];

  settings = {};
  session = 'dinner';
  barwidth = 0;

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

  min= new Date();
  max = new Date(2019,12);
  constructor(
    private routerObj: Router,
    private fb: FormBuilder,
    public masterObj: MasterService,
    public modalService: NgbModal,
  ) {
    this.barwidth = 0;

    // this.cntevnt = this.dancingNumbers(this.eventServed);
    // this.cntchef = this.dancingNumbers(this.no_chefs);
    // this.cntmanager = this.dancingNumbers(this.no_eventManager);
    // this.cntusers = this.dancingNumbers(this.users);
    this.dancingNumbers();
  }


  dancingNumbers() {
    this.cntevnt = 0;

    const interval = setInterval(() => {
      this.cntevnt += 10;
      if (this.cntevnt >= this.eventServed) { clearInterval(interval); }
    }, 50);

    this.cntchef = 0;

    const chefinterval = setInterval(() => {
      this.cntchef += 10;
      if (this.cntchef >= this.no_chefs) { clearInterval(chefinterval); }
    }, 50);

    this.cntusers = 0;
    const userinterval = setInterval(() => {
      this.cntusers += 10;
      if (this.cntusers >= this.users) { clearInterval(userinterval); }
    }, 50);

    this.cntmanager = 0;

    const mangerinterval = setInterval(() => {
      this.cntmanager += 10;
      if (this.cntmanager >= this.no_eventManager) { clearInterval(mangerinterval); }
    }, 50);

  }


  onSectionChange(sectionId: string) {
    this.masterObj.currentSection = sectionId;
    if (sectionId === 'counter') {
      this.dancingNumbers();
    }
  }

  ngOnInit() {

    this.location = [
      { 'id': 1, 'itemName': 'Ameerpet' },
      { 'id': 2, 'itemName': 'Dilsuknagar' },
      { 'id': 3, 'itemName': 'SR Nagar' },
      { 'id': 4, 'itemName': 'Athapur' },
      { 'id': 5, 'itemName': 'Koti' },
      { 'id': 6, 'itemName': 'Khairathabad' },
      { 'id': 7, 'itemName': 'Kothapet' },
      { 'id': 8, 'itemName': 'Secundrabad' }
    ];

    this.serviceType = [
      { 'id': 1, 'itemName': 'Buffet' },
      { 'id': 2, 'itemName': 'Lunch' },
      { 'id': 3, 'itemName': 'Dinner' }
    ];

    this.settings = {
      singleSelection: true,
      text: 'Select',
      enableSearchFilter: true,
      showCheckbox: false
    };

    this.homeForm = this.fb.group({
      location: [[], Validators.required],
      serviceType: [[], Validators.required],
      vegAttnd: [null, [Validators.pattern('^[0-9]+[1-9]*$'), Validators.required]],
      nonVegAttnd: [null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]],
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
    console.log(item);
    // this.masterObj.searchObj.location = item;
  }
  LocationDeSelect(item: any) {
    console.log(item);
    // this.masterObj.searchObj.location = item;
  }

  // Services
  ServiceSelect(item: any) {
    // console.log(item);
    // this.masterObj.searchObj.serviceType = item;
  }
  ServiceDeSelect(item: any) {
    // console.log(item);
    // this.masterObj.searchObj.serviceType = item;
  }

  selectedTime() {
    console.log(this.searchObj.datetime);
  }
  getTotal() {
    this.masterObj.totalAttendees = 0;
    const Nveg: any = this.masterObj.searchObj.nonVegAttnd;
    const veg: any = this.masterObj.searchObj.vegAttnd;
    if ([null, ''].indexOf(Nveg) === -1) {
      this.masterObj.totalAttendees = this.masterObj.totalAttendees + parseInt(Nveg, 10);
    }
    if ([null, ''].indexOf(veg) === -1) {
      this.masterObj.totalAttendees = this.masterObj.totalAttendees + parseInt(veg, 10);
    }

    return this.masterObj.totalAttendees;
  }

  onSearch(evt) {

    console.log(this.masterObj.searchObj, this.homeForm);
    if (this.homeForm.valid) {
      this.masterObj.totalCost = 0;
      this.masterObj.selectedDishArr = [];
      const selectedDish = JSON.stringify(this.masterObj.selectedDishArr);

      localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
      this.routerObj.navigate(['../search']);
    }else {
      const modalRef = this.modalService.open(AlertsComponent);
      this.alert.message = 'Please fill all the fields';
      this.alert.type = 'error';
      modalRef.componentInstance.alert = this.alert;
    }
  }

  onMobileSearch() {
    const modalref = this.modalService.open(ModifySearchComponent);
    modalref.componentInstance.page = 'home';
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
