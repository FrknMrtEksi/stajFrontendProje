import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {cartItem} from "../models/cartItem";
import {ShoppingItemModels} from "../models/shopping-item-models";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item=cartItem.find(c=>c.product.productId===product.productId);
    if (item){
      item.quantity+=1;
    }else{
      // @ts-ignore
      let degisken= new cartItem();
      degisken.product=product;
      degisken.quantity=1;
      cartItem.push(degisken);
    }
  }

  // @ts-ignore
  cartList():ShoppingItemModels[]{
    return cartItem;
  }

}
