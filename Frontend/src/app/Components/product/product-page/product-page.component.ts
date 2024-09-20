import { Component } from '@angular/core';
import { ProductResponse, ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  products: ProductResponse[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: ProductResponse[]) => {
        this.products = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
