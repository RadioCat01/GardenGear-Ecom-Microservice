import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./Components/product/create-Product/product.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from "./Components/product/product-card/product-card.component";
import { ProductPageComponent} from "./Components/product/product-page/product-page.component";
import { CreateOrderComponent} from "./Components/Order/create-order/create-order.component";
import { CartComponent } from "./Components/Cart/cart/cart.component";
import { LandingComponent } from "./Pages/landing/landing.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCardComponent,
    ProductPageComponent,
    CreateOrderComponent,
    CartComponent,
    LandingComponent
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
