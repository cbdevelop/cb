import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [

  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: '', loadChildren: './search/search.module#SearchModule' },
  { path: '', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: '', loadChildren: './payment/payment.module#PaymentModule' },
  { path: 'addchef', loadChildren: './addchef/addchef.module#AddchefModule' },
  { path: 'addmanager', loadChildren: './addmanager/addmanager.module#AddmanagerModule' },
  { path: 'contact', loadChildren: './shared/contact/contact.module#ContactModule' }
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
