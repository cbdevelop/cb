import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommentsComponent } from './comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [ CommentsComponent ],
  exports:[ CommentsComponent ],
  entryComponents: [ CommentsComponent ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CommentsModule { }
