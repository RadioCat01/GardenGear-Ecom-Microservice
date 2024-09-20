import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart/cart.component';
import { HeroComponent } from './Components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from "@angular/material/badge";
import { CreateProductComponent } from './Components/product/create-product/create-product.component';
import { ProductCardComponent } from './Components/product/product-card/product-card.component';
import { ProductPageComponent } from './Components/product/product-page/product-page.component';
import { CreatePrderComponent } from './Components/order/create-prder/create-prder.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { MidsideComponent } from './components/midside/midside.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeroComponent,
    CreateProductComponent,
    ProductCardComponent,
    ProductPageComponent,
    CreatePrderComponent,
    LandingComponent,
    MidsideComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
