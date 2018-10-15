import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPopupComponent } from './city-popup.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule
  ],
  declarations: [CityPopupComponent],
  exports: [
    CityPopupComponent
  ],
  entryComponents: [
    CityPopupComponent
  ]
})
export class CityPopupModule { }
