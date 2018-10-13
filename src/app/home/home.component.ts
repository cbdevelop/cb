import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { SearchModel, MasterService } from '../services/master.service';
import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModifySearchComponent } from '../shared/modify-search/modify-search.component';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { alert } from '../shared/models/alert.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alert: alert = { type: 'success', message: '' };
  public searchObj: SearchModel = {
    location: [
    ], serviceType: [], nonVegAttnd: null, vegAttnd: null, datetime: new Date()
  };

  public homeForm: FormGroup;

  locationArr = [];

  serviceTypeArr = [

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

  min = new Date();
  max = new Date(2019, 12);
  constructor(
    private routerObj: Router,
    private fb: FormBuilder,
    public masterObj: MasterService,
    public modalService: NgbModal,
    private datepipe: DatePipe
  ) {
    this.barwidth = 0;
    this.dancingNumbers();

    this.homeForm = this.fb.group({
      location: [[], Validators.required],
      serviceType: [[], Validators.required],
      vegAttnd: [null, [Validators.pattern('^[0-9]+[1-9]*$'), Validators.required]],
      nonVegAttnd: [null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]],
      datetime: ['', Validators.required]
    });

    this.locationArr = [
      { 'id': 1, 'itemName': 'Ameerpet' },
      { 'id': 2, 'itemName': 'Dilsuknagar' },
      { 'id': 3, 'itemName': 'SR Nagar' },
      { 'id': 4, 'itemName': 'Athapur' },
      { 'id': 5, 'itemName': 'Koti' },
      { 'id': 6, 'itemName': 'Khairathabad' },
      { 'id': 7, 'itemName': 'Kothapet' },
      { 'id': 8, 'itemName': 'Secundrabad' }
    ];

    this.serviceTypeArr = [
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
  }


  ngOnInit() {
    this.selectedTime(null);

  }

  onlyNumberKey(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 9 && event.keyCode !== 8 && event.keyCode !== 13 && !pattern.test(inputChar)) {
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


  selectedTime(evt) {
    console.log(evt, this.masterObj.searchObj.datetime < new Date());

    if (this.masterObj.searchObj.datetime < new Date()) {
      const modalRef = this.modalService.open(AlertsComponent);
      this.alert.message = 'Selected Event Date & Time should be upcoming date';
      this.alert.type = 'warning';
      modalRef.componentInstance.alert = this.alert;
    } else {
      let time = this.datepipe.transform(this.masterObj.searchObj.datetime, 'hh');
      let tt = parseInt(time, 10);
      if (tt > 7 && tt < 11)
        this.masterObj.session = 'Break Fast';
      else if (tt > 12 && tt < 15)
        this.masterObj.session = 'Lunch';
      else if (tt > 19 && tt < 22)
        this.masterObj.session = 'Dinner';
      else if (tt > 16 && tt < 18)
        this.masterObj.session = 'Snack Time';
      else {
        this.masterObj.session = 'other';
      }
    }
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
      this.masterObj.clearData();
      localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
      localStorage.setItem('session', this.masterObj.session);
      
      this.routerObj.navigate(['../search']);
    } else {
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
