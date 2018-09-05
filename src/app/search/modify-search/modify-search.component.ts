import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { searchModel } from '../../services/master.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modify-search',
  templateUrl: './modify-search.component.html',
  styleUrls: ['./modify-search.component.css']
})
export class ModifySearchComponent implements OnInit {

  searchObj: searchModel;

  modifiedForm: FormGroup;
  
  location = [];
  serviceType = [];
  
  settings = {};
  session = "dinner"

  @ViewChild("modify") modify;

  constructor( private routerObj: Router, private fb: FormBuilder, public activeModal: NgbActiveModal ) { }

  ngOnInit() {

    this.location = [ 
    {"id":1,"itemName":"Ameerpet"}, 
    {"id":2,"itemName":"Dilsuknagar"},
    {"id":3,"itemName":"SR Nagar"},
    {"id":4,"itemName":"Athapur"},
    {"id":5,"itemName":"Koti"},
    {"id":6,"itemName":"Khairathabad"},
    {"id":7,"itemName":"Kothapet"},
    {"id":8,"itemName":"Secundrabad"}  
  ];

    this.serviceType = [ 
    {"id":1,"itemName":"Buffet"},
    {"id":2,"itemName":"Lunch"},
    {"id":3,"itemName":"Dinner"} 
  ];

    this.settings = { 
      singleSelection: true, 
      text:"Select",
      enableSearchFilter: true 
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
  LocationSelect(item:any){
    console.log(item);
  }
  LocationDeSelect(item:any){
    console.log(item);
  }

  // Services
  ServiceSelect(item:any){
    console.log(item);
  }
  ServiceDeSelect(item:any){
    console.log(item);
  }

  // OnClose of Modified_Search
  onClose() {
    this.activeModal.close();
  }

  onModified() {
    // console.log(evt);
    // this.routerObj.navigate(['../search'])
  }

}
