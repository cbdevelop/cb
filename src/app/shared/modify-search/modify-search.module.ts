import { NgModule } from '@angular/core';
import { CommonModule , DatePipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifySearchComponent } from './modify-search.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsModule } from '../alerts/alerts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgbModalModule,
    AngularMultiSelectModule,
    AlertsModule
  ],
  declarations: [
    ModifySearchComponent
  ],
  exports:[
    ModifySearchComponent
  ],
  entryComponents:[
    ModifySearchComponent
  ],
  providers:[
    DatePipe
  ]
})
export class ModifySearchModule { }
