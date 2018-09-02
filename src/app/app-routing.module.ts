import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [

  { path: '', loadChildren: './home/home.module#HomeModule' },
  {
    path: '',
    loadChildren: './search/search.module#SearchModule'
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules // <-This is our preloading
        ,enableTracing: false ,useHash: false}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
