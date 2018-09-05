import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

import { SearchRoutingModule } from './search-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { ChefCatPopupComponent } from './chef-cat-popup/chef-cat-popup.component';

import { HeaderModule, FooterModule } from '../shared/index';
import { MasterService } from '../services/master.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'

import { NgbModalModule, NgbPopoverModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifySearchComponent } from './modify-search/modify-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    HeaderModule,
    FooterModule,
    ScrollToModule,
    NgbPopoverModule,
    NgbModalModule,
    AngularMultiSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule    
  ],
  declarations: [
    SearchComponent,
    MenuComponent,
    ResultViewComponent,
    OrderPreviewComponent, 
    ChefCatPopupComponent, 
    ModifySearchComponent
  ],
  providers:[
    MasterService,
    NgbActiveModal
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[
    ChefCatPopupComponent,
    ModifySearchComponent
  ]
})
export class SearchModule { }
