import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('shead') header;
  constructor() { 
    
  }

  ngOnInit() {
    // console.log(this.header);
    // this.header.header.nativeElement.classList.add('staticHead');
    // this.header.header.nativeElement.classList.add('scrollAct');
  }

}
