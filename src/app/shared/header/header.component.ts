import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("head") header;
  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number >= 100) {
      this.header.nativeElement.classList.add("scrollAct");
      // document.getElementById('header').classList.add("scrollAct");
    } else if (number < 200) {
      // document.getElementById('header').classList.remove("scrollAct");
      this.header.nativeElement.classList.remove("scrollAct");
    }
  }

}
