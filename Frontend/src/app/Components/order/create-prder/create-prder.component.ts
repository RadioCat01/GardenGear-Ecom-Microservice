import { Component } from '@angular/core';
import { OrderRequest, OrderService, PaymentMethod, PurchaseRequest } from '../order-service/order.service';
import { CartService } from '../../cart/cart-service/cart.service';

@Component({
  selector: 'app-create-prder',
  templateUrl: './create-prder.component.html',
  styleUrl: './create-prder.component.scss'
})
export class CreatePrderComponent {
  PaymentMethod = PaymentMethod;

  order: OrderRequest = {
    reference: '',
    userid: '',
    firstName: '',
    lastName: '',
    email: '',
    amount: 0,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    products: [],
    street: '',
    houseNumber: '',
    zipCode: ''
  };

  constructor(
    private orderService:OrderService,
    private cartService: CartService
  ){}

  onSubmit():void{

    const totalPrize = this.cartService.getTotalPrice();
    const cartItems = this.cartService.cartItems.value;

    const purchaseRequests:PurchaseRequest[] = cartItems.map(item =>({
      productId:item.id,
      quantity:1
    }));

    const newOrder: OrderRequest = {
      ...this.order,
      amount:totalPrize,
      products:purchaseRequests
    }

    this.orderService.createOrder(newOrder).subscribe(response => {
      console.log('Order Successful', response);
    },error =>{
      console.error('Error',error);
    }
  )

  }
}
