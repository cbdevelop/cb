import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { } from '@angular/core/src/metadata/di';
import { } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('scrlbtn') scrolbtn;

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
