import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [NgbPopoverConfig]
})
export class MenuComponent implements OnInit {

  @ViewChild('cheftop') cheftop;
  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'bottom';
    config.triggers = 'click';
  }
  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number > 100) {
      this.cheftop.nativeElement.classList.add('chefHeadFixed');
    } else {
      this.cheftop.nativeElement.classList.remove('chefHeadFixed');
    }
  };

}
