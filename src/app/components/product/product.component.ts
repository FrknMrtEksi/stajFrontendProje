import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product1={
    productId:1,
    productName:"Bardak",
    categoryId:1,
    unitPrice:5,
};
  product2={
    productId:2,
    productName:"Kaşık",
    categoryId:2,
    unitPrice:2,
  };
  product3={
    productId:2,
    productName:"Tabak",
    categoryId:1,
    unitPrice:10,
  };
  products=[
    this.product1,
    this.product2,
    this.product3,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
