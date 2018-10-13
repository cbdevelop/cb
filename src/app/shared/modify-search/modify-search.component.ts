import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchModel, MasterService } from '../../services/master.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


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
  session = "dinner"
  @Input() page;
  @ViewChild("modify") modify;

  constructor(
    private routerObj: Router, private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public masterObj: MasterService
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
    console.log(item);
  }
  LocationDeSelect(item: any) {
    console.log(item);
  }

  // Services
  ServiceSelect(item: any) {
    console.log(item);
  }
  ServiceDeSelect(item: any) {
    console.log(item);
  }

  // OnClose of Modified_Search
  onClose() {
    this.activeModal.dismiss();
  }

  onSearch(evt) {

    console.log(this.masterObj.searchObj, this.modifiedForm);
    if (this.modifiedForm.valid) {
      if (this.page == "home") {
        this.masterObj.totalCost =0;
        this.masterObj.selectedDishArr= [];
        var selectedDish = JSON.stringify(this.masterObj.selectedDishArr);
        localStorage.setItem("cost", this.masterObj.totalCost.toString());
        localStorage.setItem("selDises", selectedDish);
        this.routerObj.navigate(['../search']);
      } else
        this.activeModal.close();
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
