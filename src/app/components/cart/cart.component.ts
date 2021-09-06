import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartItem} from "../../models/cartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }
 getCart(){
    this.cartItems=this.cartService.cartList();
 }
}
