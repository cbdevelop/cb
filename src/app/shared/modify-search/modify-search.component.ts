import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SearchModel, MasterService } from '../../services/master.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from '../alerts/alerts.component';
import { alert } from '../models/alert.model';
import { CityPopupComponent } from '../city-popup/city-popup.component';


@Component({
  selector: 'app-modify-search',
  templateUrl: './modify-search.component.html',
  styleUrls: ['./modify-search.component.css']
})
export class ModifySearchComponent implements OnInit {

  searchObj: SearchModel;

  modifiedForm: FormGroup;
  serTypeSettings = {};
  location = [];
  serviceTypeArr = [];

  settings = {};
  session = "dinner";
  alert: alert = { type: 'success', message: '' };

  today = new Date()
  min = new Date();
  max = new Date(2019, 12);

  @Input() page;
  @ViewChild("modify") modify;

  constructor(
    private routerObj: Router,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public modalService: NgbModal,
    public masterObj: MasterService,
    private datepipe: DatePipe
  ) {

    this.settings = {
      singleSelection: true,
      text: 'Select',
      enableSearchFilter: true,
      showCheckbox: false,
      labelKey: "location",
      primaryKey: "postalcode"
    };
    this.serTypeSettings = {
      singleSelection: true,
      text: 'Select',
      enableSearchFilter: true,
      showCheckbox: false,
      labelKey: "type",
      primaryKey: "id"
    };
  }

  ngOnInit() {
    this.min = new Date(
      new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5
    )

    // this.serviceTypeArr = this.masterObj.masterServiceType;

    this.modifiedForm = this.fb.group({
      location: [[], Validators.required],
      // serviceType: [[], Validators.required],
      vegAttnd: [''],
      nonVegAttnd: [''],
      datetime: []
    });

  }

  // Locations
  LocationSelect(item: any) {

  }
  LocationDeSelect(item: any) {

  }

  // Services
  ServiceSelect(item: any) {

  }
  ServiceDeSelect(item: any) {

  }

  // OnClose of Modified_Search
  onClose() {
    this.activeModal.dismiss();
  }

  onTime(event) {
    // const pattern = /[0-9]/;
    // const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 9 && event.keyCode !== 13 ) {
      event.preventDefault();
    }
  }

  selectedTime(evt) {
       
    if (this.masterObj.searchObj.datetime < this.min) {
      const modalRef = this.modalService.open(AlertsComponent);
      this.alert.message = 'Selected Event Date & Time should be upcoming date';
      this.alert.type = 'warning';
      modalRef.componentInstance.alert = this.alert;
      return false;
    } else {
      let time = this.datepipe.transform(this.masterObj.searchObj.datetime, 'HH');
      let tt = parseInt(time, 10);
      if (tt >= 7 && tt <=11)
        this.masterObj.session = 'Break Fast';
      else if (tt >= 12 && tt < 16)
        this.masterObj.session = 'Lunch';
      else if (tt >= 19 && tt <= 22)
        this.masterObj.session = 'Dinner';
      else if (tt >= 16 && tt <= 18)
        this.masterObj.session = 'Snack Time';
      else {
        
        const modalRef = this.modalService.open(AlertsComponent);
        this.alert.message = 'Sorry, we serve from 7 AM till 10 PM.';
        this.alert.type = 'warning';
        modalRef.componentInstance.alert = this.alert;
        this.masterObj.session = ''
        return false;        
        // this.masterObj.session = 'other';
      }
    }
    return true;
  }
  /*
    onSearch(evt) {
      console.log(this.masterObj.searchObj, this.modifiedForm);
      if (this.modifiedForm.valid) {
        // if (this.page == "home") {
        this.masterObj.clearData();
        localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
        localStorage.setItem('session', this.masterObj.session);
        this.routerObj.navigate(['../search']);
        this.activeModal.close();
        // } else
        //   this.activeModal.close();
      }
  
      
    }
  */

  onSearch(evt) {

    // console.log(this.masterObj.searchObj, this.homeForm);
    if (this.modifiedForm.valid) {
      if (this.masterObj.totalAttendees > 0) {
        if (!this.selectedTime(null))
          return;
        localStorage.setItem('searchObj', JSON.stringify(this.masterObj.searchObj));
        localStorage.setItem('session', this.masterObj.session);
        localStorage.setItem('totalAttnd', this.masterObj.totalAttendees.toString());
        this.routerObj.navigate(['../search']);
        this.activeModal.close();
      } else {
        const modalRef = this.modalService.open(AlertsComponent);
        this.alert.message = 'Please enter no. of Attendees.';
        this.alert.type = 'warning';
        modalRef.componentInstance.alert = this.alert;

      }
    } else {
      const modalRef = this.modalService.open(AlertsComponent);
      this.alert.message = 'Please enter all the details';
      this.alert.type = 'warning';
      modalRef.componentInstance.alert = this.alert;
    }
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

  cityPopup() {
    // alert('city');console.log('popup');
    this.modalService.open(CityPopupComponent);
  }
}
