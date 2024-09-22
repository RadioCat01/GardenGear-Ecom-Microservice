import { Component } from '@angular/core';
import { ProductResponse } from '../../product/product-service/product.service';
import { CartService } from '../cart-service/cart.service';
import {OrderRequest, OrderService, PaymentMethod} from "../../order/order-service/order.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ThankyouComponent} from "../thankyou/thankyou.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  order: OrderRequest = {
    id: 0,
    userid: '',
    reference: '',
    firstName: '',
    lastName:'',
    email:'',
    amount:0,
    paymentMethod: PaymentMethod.PAYPAL,
    products:[],
    street:'',
    houseNumber:'',
    zipCode:''
  };

  cartItems: ProductResponse[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private cart:CartService,
    private dialogRef: MatDialogRef<CartComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });

    this.cart.cartItems$.subscribe( cartItems => {
      this.order.amount = this.cart.getTotalPrice();
      this.order.products = cartItems.map(item => ({
        productId: item.id,
        quantity: 1
      }));},
    );
  }

  onSubmit() {
    this.orderService.createOrder(this.order).subscribe(
      (url:string) =>{
        this.dialogRef.close();
        this.openThankYouDialog();
      }, error => {
        console.error('Error creating order:', error);
      });
  }

  openThankYouDialog() {
    this.dialog.open(ThankyouComponent, {

    });
  }


}
