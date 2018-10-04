import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { searchModel, MasterService } from '../services/master.service';
import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchObj: searchModel;

  homeForm: FormGroup;

  location = [];

  serviceType = [];

  settings = {};
  session = "dinner";
  barwidth = 0
  eventServed = 1254;
  no_chefs = 470;
  no_eventManager = 210;
  users = 2150;
  public spiedTags = [];

  private currentSection: string;


  constructor(
    private routerObj: Router,
    private fb: FormBuilder,
    public masterObj: MasterService
  ) {
    this.barwidth = 0;

    let interval = setInterval(() => {
      this.barwidth += 10;
      if (this.barwidth >= 1200) clearInterval(interval);
    }, 10)

  }



  onSectionChange(sectionId: string) {
    this.masterObj.currentSection = sectionId;
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
