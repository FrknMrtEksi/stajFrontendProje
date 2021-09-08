import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../models/cartItem";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems=this.cartService.cartList();
  }
}
