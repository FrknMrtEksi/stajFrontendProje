import { Component, OnInit } from '@angular/core';
import {ShoppingItemModels} from "../../models/shopping-item-models";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartItems:ShoppingItemModels[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
