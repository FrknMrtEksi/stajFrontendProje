import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartItem} from "../../models/cartItem";
import {Product} from "../../models/product";

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
 removeFromCart(product:Product){
    this.cartService.removeCart(product);
 }
}
