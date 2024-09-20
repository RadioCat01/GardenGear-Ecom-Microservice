import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductRequest{
  naame: string;
  description: string;
  availableQuantity: number;
  price: number;
  category: string;
}
export interface ProductResponse {
  id: number;
  naame: string;
  description: string;
  availableQuantity: number;
  price: number;
  imagePath: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private postUrl = 'http://localhost:8051/products';
  private getUrl =  'http://localhost:8051/products';

  constructor(private http: HttpClient) { }

  createProduct(productRequest: ProductRequest, image: File): Observable<number> {
    const formData: FormData = new FormData();
    formData.append('request', new Blob([JSON.stringify(productRequest)], { type: 'application/json' }));
    formData.append('image', image);

    return this.http.post<number>(this.postUrl, formData,);
  }

  getAllProducts():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(this.getUrl);
  }
}
