import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

import { SearchRoutingModule } from './search-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { ChefCatPopupComponent } from './chef-cat-popup/chef-cat-popup.component';
import { SigninComponent } from '../shared/signin/signin.component';

import { HeaderModule, FooterModule, SigninModule, DirectiveModule, CommentsModule } from '../shared/index';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'
import { NgbModalModule,NgbCollapseModule, NgbPopoverModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './filter/filter.component';
import { MobilePreviewComponent } from './mobile-preview/mobile-preview.component';
import { ModifySearchModule } from '../shared/modify-search/modify-search.module';
import { AlertsModule } from '../shared/alerts/alerts.module';
// import { DragScrollModule } from 'ngx-drag-scroll';



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
    NgbCollapseModule,
    AngularMultiSelectModule,
    SigninModule  ,
    DirectiveModule,
    CommentsModule,
    ModifySearchModule,
    AlertsModule,
   // DragScrollModule
  ],
  declarations: [
    SearchComponent,
    MenuComponent,
    ResultViewComponent,
    OrderPreviewComponent, 
    ChefCatPopupComponent, 
    FilterComponent,
    MobilePreviewComponent
  ],
  providers:[
    NgbActiveModal
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[
    ChefCatPopupComponent,
    SigninComponent,
    MobilePreviewComponent
  ]
})
export class SearchModule { }
