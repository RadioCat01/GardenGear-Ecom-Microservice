import {Component, Input} from '@angular/core';
import {ProductResponse, ProductService} from "../product-service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../cart/cart-service/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  product: ProductResponse={
    id:0,
    naame:'',
    description:'',
    availableQuantity:0,
    price:0,
    imagePath:'',
    category:''
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar:MatSnackBar
    ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
    console.log(this.product);
  }
  addToCart() {
    this.cartService.addToCart(this.product);
    this.snackBar.open(`${this.product.naame} added to cart`, '', {
      duration: 3000, // Show for 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:[`custom`]
    });
  }
  getImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }
}
