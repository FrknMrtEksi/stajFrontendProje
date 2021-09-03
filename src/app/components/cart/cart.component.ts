import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {appStateModel} from "../../models/app-state-model";
import {Observable} from "rxjs";
import {ShoppingItemModels} from "../../models/shopping-item-models";
import {AddItemAction} from "../../action/shopping-action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
shoppingItems$: Observable<Array<ShoppingItemModels>> | undefined
  newShoppingItem:ShoppingItemModels={shopId:'',shopName:'',shopUnitPrice:'',shopImgId:''}
  constructor(private store:Store<appStateModel>) {}

  ngOnInit(): void {
   this.shoppingItems$=this.store.select(store=>store.shopping);
   setTimeout(()=>this.addItem(),2000);
  }
   addItem(){
     this.store.dispatch(new AddItemAction(this.newShoppingItem));
     this.newShoppingItem={shopId:'',shopName:'',shopUnitPrice:'',shopImgId:''};

   }
}
