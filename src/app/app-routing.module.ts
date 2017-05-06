import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }, {
    path: 'details/:id', component: ProductDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }