import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

import { SearchRoutingModule } from './search-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { ChefCatPopupComponent } from './chef-cat-popup/chef-cat-popup.component';
import { ModifySearchComponent } from './modify-search/modify-search.component';
import { SigninComponent } from '../shared/signin/signin.component';
import { CommentsComponent } from '../shared/comments/comments.component';

import { HeaderModule, FooterModule, SigninModule, DirectiveModule } from '../shared/index';
import { MasterService } from '../services/master.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'
import { NgbModalModule, NgbPopoverModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './filter/filter.component';
import { MobilePreviewComponent } from './mobile-preview/mobile-preview.component';


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
    OwlNativeDateTimeModule,
    SigninModule  ,
    DirectiveModule  
  ],
  declarations: [
    SearchComponent,
    MenuComponent,
    ResultViewComponent,
    OrderPreviewComponent, 
    ChefCatPopupComponent, 
    ModifySearchComponent,
    CommentsComponent,
    FilterComponent,
    MobilePreviewComponent
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
    ModifySearchComponent,
    SigninComponent,
    CommentsComponent,
    MobilePreviewComponent
  ]
})
export class SearchModule { }
