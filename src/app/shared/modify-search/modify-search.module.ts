import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifySearchComponent } from './modify-search.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgbModalModule,
    AngularMultiSelectModule,
  ],
  declarations: [
    ModifySearchComponent
  ],
  exports:[
    ModifySearchComponent
  ],
  entryComponents:[
    ModifySearchComponent
  ]
})
export class ModifySearchModule { }
