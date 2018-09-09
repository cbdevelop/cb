import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ScrollSpyDirective } from "./scroll-spy.directive";

@NgModule({
    imports: [
      CommonModule,      
    ],
    declarations: [
        ScrollSpyDirective
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports:[
        ScrollSpyDirective
    ]
  })

export class DirectiveModule {

}