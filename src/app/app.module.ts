import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ProductService} from './shared/services/product.service';

import {AppRoutingModule} from './app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductThumbnailComponent,
    DashboardComponent,
    ProductDetailsComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
