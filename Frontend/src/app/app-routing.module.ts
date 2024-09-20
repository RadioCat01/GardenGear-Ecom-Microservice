import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './Components/product/create-product/create-product.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { HeroComponent } from './Components/hero/hero.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/landing', pathMatch:'full'
  },
  {
    path:"landing",
    component : LandingComponent,
  },
  {
    path:"add",
    component: CreateProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
