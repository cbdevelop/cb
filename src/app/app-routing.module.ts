import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [

  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'addchef', loadChildren: './addchef/addchef.module#AddchefModule' },
  { path: 'addmanager', loadChildren: './addmanager/addmanager.module#AddmanagerModule' },
  { path: 'contact', loadChildren: './shared/contact/contact.module#ContactModule' },
  { path: 'terms', loadChildren: './shared/terms/terms.module#TermsModule' },
  { path: 'privacy', loadChildren: './shared/privacy/privacy.module#PrivacyModule' },
  { path: 'about', loadChildren: './shared/about/about.module#AboutModule' },
  { path: 'career', loadChildren: './shared/career/career.module#CareerModule' }
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
