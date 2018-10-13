import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SearchModel, MasterService } from '../../services/master.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from '../alerts/alerts.component';
import { alert } from '../models/alert.model';


@Component({
  selector: 'app-modify-search',
  templateUrl: './modify-search.component.html',
  styleUrls: ['./modify-search.component.css']
})
export class ModifySearchComponent implements OnInit {

  searchObj: SearchModel;

  modifiedForm: FormGroup;

  location = [];
  serviceType = [];

  settings = {};
  session = "dinner";
  alert: alert = { type: 'success', message: '' };
  @Input() page;
  @ViewChild("modify") modify;

  constructor(
    private routerObj: Router,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public modalService: NgbModal,
    public masterObj: MasterService,
    private datepipe: DatePipe
  ) { }

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

    this.modifiedForm = this.fb.group({
      location: [[], Validators.required],
      serviceType: [[], Validators.required],
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
}
