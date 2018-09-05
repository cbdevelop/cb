import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { searchModel } from '../services/master.service';
import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private searchObj: searchModel;

  homeForm: FormGroup;

  location = [];

  serviceType = [];

  settings = {};
  session = "dinner"
  constructor(private routerObj: Router, private fb: FormBuilder) { }

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
      enableSearchFilter: true
    };

    this.homeForm = this.fb.group({
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

  onSearch(evt) {
    console.log(evt);
    this.routerObj.navigate(['../search'])
  }
}
