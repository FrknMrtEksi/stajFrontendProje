import { Component, OnInit } from '@angular/core';
import {ShoppingItemModels} from "../../models/shopping-item-models";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartItems:ShoppingItemModels[]=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }
 getCart(){
    this.CartItems=this.cartService.cartList();
 }
}
