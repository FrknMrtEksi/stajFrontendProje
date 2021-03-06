import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product';
import {CartService} from "../../service/cart.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private cartService:CartService) {
  }

  product1={
    productId:1,
    productName:"Bardak",
    categoryId:1,
    unitPrice:5,
    unitsInStock:25,
    imgId:1,
};
  product2={
    productId:2,
    productName:"Kaşık",
    categoryId:2,
    unitPrice:2,
    unitsInStock:101,
    imgId:3,
  };
  product3={
    productId:3,
    productName:"Tabak",
    categoryId:1,
    unitPrice:10,
    unitsInStock:20,
    imgId:2,
  };
  product4={
    productId:4,
    productName:"Tabak",
    categoryId:1,
    unitPrice:12,
    unitsInStock:50,
    imgId:2,
  };
  products:Product[]=[
    this.product1,
    this.product4,
    this.product3,
    this.product2
  ];


  ngOnInit(): void {

  }
  addToCart(product:Product){
    this.cartService.addCart(product);
  }
}
