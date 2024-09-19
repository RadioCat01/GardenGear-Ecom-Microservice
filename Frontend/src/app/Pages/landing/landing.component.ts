import { Component } from '@angular/core';
import {ProductResponse, ProductService} from "../../Components/product/product-Service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  products: ProductResponse[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe({
      next: (data: ProductResponse[]) => {this.products = data;}
    });
  }
}
