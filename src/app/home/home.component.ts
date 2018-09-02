import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { searchModel } from '../services/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchObj: searchModel = {
    location: "Hyderabad", serviceType: "Buffet", vegAttnd: 0, nonVegAttnd: 0, date: new Date(), time: ""
  };
  constructor(private routerObj:Router) { }

  ngOnInit() {
  }

  onSearch(evt) {
    console.log(evt);
    this.routerObj.navigate(['../search'])
  }
}
