import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

import { SearchRoutingModule } from './search-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { ChefCatPopupComponent } from './chef-cat-popup/chef-cat-popup.component';

import { HeaderModule, FooterModule } from '../shared/index';
import { MasterService } from '../services/master.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    HeaderModule,
    FooterModule,
    ScrollToModule,
    NgbPopoverModule
  ],
  declarations: [
    SearchComponent,
    MenuComponent,
     ResultViewComponent,
    OrderPreviewComponent, 
    ChefCatPopupComponent
  ],
  providers:[
    MasterService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchModule { }
