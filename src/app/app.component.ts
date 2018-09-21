import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('scrlbtn') scrolbtn;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const contentContainer = window;
      contentContainer.scrollTo(0, 0);
      // this.onActivate(contentContainer)
    })
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || window.scrollY || 0;

    if (number >= 200) {
      this.scrolbtn.nativeElement.setAttribute('style', 'display:block');

    } else if (number < 200) {

      this.scrolbtn.nativeElement.setAttribute('style', 'display:none');
    }
  }
}
