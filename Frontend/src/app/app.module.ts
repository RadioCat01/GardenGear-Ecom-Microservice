import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart/cart.component';
import { HeroComponent } from './Components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './Components/product/create-product/create-product.component';
import { ProductCardComponent } from './Components/product/product-card/product-card.component';
import { ProductPageComponent } from './Components/product/product-page/product-page.component';
import { CreatePrderComponent } from './Components/order/create-prder/create-prder.component';
import { LandingComponent } from './Pages/landing/landing.component';
import {MidsideComponent} from "./Components/midside/midside.component";
import {FooterComponent} from "./Components/footer/footer.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ProductDetailsComponent } from './Components/product/product-details/product-details.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ThankyouComponent} from "./Components/cart/thankyou/thankyou.component";



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
    CartComponent,
    ProductDetailsComponent,
    ThankyouComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
