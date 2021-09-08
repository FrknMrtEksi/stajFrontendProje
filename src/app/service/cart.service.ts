import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {CartItems} from "../models/cartItems";
import {CartItem} from '../models/cartItem';
import {isNumber} from "@ngrx/store/src/meta-reducers/utils";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addCart(product:Product){
    let item=CartItems.find(c=>c.product.productId===product.productId);
    if (item){
      item.quantity+=1;
      item.product.unitsInStock -=1;
    }else{
      // @ts-ignore
      let degisken= new CartItem();
      degisken.product=product;
      degisken.product.unitsInStock-=1;
      degisken.quantity=1;
      CartItems.push(degisken);
    }
  }

  removeCart(product:Product){
    let item=CartItems.find(c=>c.product.productId===product.productId);
    if (item.quantity>1){
      item.quantity-=1;
      item.product.unitsInStock +=1;
    }else{
      CartItems.splice(CartItems.indexOf(item),1);
      product.unitsInStock+=1;
    }

  }

  // @ts-ignore
  cartList():CartItem[]{
    return CartItems;
  }

}
