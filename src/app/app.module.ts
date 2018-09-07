import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* 3rd party tools */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

/* components*/
import { AppComponent } from './app.component';

/* my modules */
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MasterService } from './services/master.service';
// import { CommentsComponent } from './shared/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    // CommentsComponent
  ],
  imports: [

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    // SharedModule
    
  ],
  providers: [
    MasterService
  ],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
