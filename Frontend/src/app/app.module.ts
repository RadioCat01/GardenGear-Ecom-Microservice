import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/create-Product/product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { CreateOrderComponent } from './Order/create-order/create-order.component';
import { CartComponent } from './Cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCardComponent,
    ProductPageComponent,
    CreateOrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
