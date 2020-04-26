import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SortProductsPipe } from './sort-products.pipe';
import { FilterProductsPipe } from './filter-products.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchProductsPipe } from './search-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SortProductsPipe,
    FilterProductsPipe,
    ProductDetailComponent,
    SearchProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
