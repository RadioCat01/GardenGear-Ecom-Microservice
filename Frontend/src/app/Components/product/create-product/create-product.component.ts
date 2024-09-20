import { Component } from '@angular/core';
import { ProductRequest, ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  constructor(private productService: ProductService){}

  productRequest: ProductRequest = {
    naame: '',
    description: '',
    availableQuantity: 0,
    price: 0,
    category: ''
  };

  selectedImage: File | null = null;

  onImageSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
    }
  }


  createProduct(): void {
    if (this.selectedImage) {
      this.productService.createProduct(this.productRequest, this.selectedImage)
        .subscribe({
          next: (response) => {
            console.log('Product created with ID:', response);
          },
          error: (error) => {
            console.error('Error creating product:', error);
          }
        });
    } else {
      console.error('Image file not selected');
    }
  }
}
