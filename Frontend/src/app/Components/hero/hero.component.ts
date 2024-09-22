import { Component } from '@angular/core';
import { CartService } from '../cart/cart-service/cart.service';
import { ProductResponse } from '../product/product-service/product.service';
import {CartComponent} from "../cart/cart/cart.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  cartItemCount: number = 0;

  constructor(
    private cartService: CartService,
    public dialog: MatDialog,
  ) {
  }


  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items: ProductResponse[]) => {
      this.cartItemCount = items.length;
    });
  }

  openDialog() {
    this.dialog.open(CartComponent,{
    });
  }

}
