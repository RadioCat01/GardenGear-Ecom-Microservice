import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductResponse } from '../product-service/product.service';
import { CartService } from '../../cart/cart-service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: ProductResponse;

  price:number=0;
  id:number =0;

  constructor(private cartService: CartService){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.price = this.product.price;
      this.id = this.product.id;
    }
  }

  getImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
