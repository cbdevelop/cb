import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PromocodeComponent } from './promocode.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [ PromocodeComponent ],
  exports:[ PromocodeComponent ],
  entryComponents: [ PromocodeComponent ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PromocodeModule { }
