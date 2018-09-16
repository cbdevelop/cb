import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('chefHead') chefHead;

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number > 100) {
      this.chefHead.nativeElement.classList.add('chefHeadFixed');
    } else {
      this.chefHead.nativeElement.classList.remove('chefHeadFixed');
    }
  };

}
