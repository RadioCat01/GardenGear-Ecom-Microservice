import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PurchaseRequest{
  productId:number;
  quantity:number;
}
export interface OrderResponse{
  id:number;
  reference:string;
  amount:number;
  paymentMethod: PaymentMethod;
  customerId:string;
}

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
  BANK_TRANSFER = 'BANK_TRANSFER'
}

export interface PurchaseRequest {
  productId: number;
  quantity: number;
}

export interface OrderRequest{
  id?: number;
  reference: string;
  userid: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  paymentMethod: PaymentMethod;
  products: PurchaseRequest[];
  street: string;
  houseNumber: string;
  zipCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private createOrderUrl = 'http://myapp.local/orders';
  private getOrdersUrl = 'http://myapp.local/orders';

  constructor(private http: HttpClient) { }

  createOrder(order:OrderRequest):Observable<string>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<string>(this.createOrderUrl,order,{headers, responseType: 'text' as 'json' });
  }

  getOrders():Observable<OrderResponse[]>{
    return this.http.get<OrderResponse[]>(this.getOrdersUrl);
  }

  getOrderById(orderId: number): Observable<OrderResponse> {
    const url = `${this.getOrdersUrl}/${orderId}`;
    return this.http.get<OrderResponse>(url);
  }

}
