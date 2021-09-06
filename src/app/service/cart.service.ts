import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {CartItems} from "../models/cartItems";
import {CartItem} from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addCart(product:Product){
    let item=CartItems.find(c=>c.product.productId===product.productId);
    if (item){
      item.quantity+=1;
    }else{
      // @ts-ignore
      let degisken= new CartItem();
      degisken.product=product;
      degisken.quantity=1;
      CartItems.push(degisken);
    }
  }

  // @ts-ignore
  cartList():CartItem[]{
    return CartItems;
  }

}
