import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './Components/product/create-product/create-product.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { HeroComponent } from './Components/hero/hero.component';
import {CartComponent} from "./Components/cart/cart/cart.component";
import {ProductDetailsComponent} from "./Components/product/product-details/product-details.component";
import {ThankyouComponent} from "./Components/cart/thankyou/thankyou.component";

const routes: Routes = [
  {
    path: '', redirectTo:'/landing', pathMatch:'full'
  },
  {
    path:"landing",
    component : LandingComponent,
  },
  {
    path:`product/:id`,
    component: ProductDetailsComponent
  },
  {
    path: "addProduct",
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
