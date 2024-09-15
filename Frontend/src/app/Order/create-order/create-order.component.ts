import { Component } from '@angular/core';
import { OrderRequest, OrderService, PaymentMethod, PurchaseRequest } from '../order-Service/order.service';
import { CartService } from '../../Cart/cart-Service/cart.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {

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
    private cartService:CartService
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
