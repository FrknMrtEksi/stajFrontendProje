import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {CartComponent} from "./components/cart/cart.component";
import {StoreModule} from "@ngrx/store";
import {ShoppingReducer} from "../app/reducer/shopping-reducer";
import {FormsModule} from "@angular/forms";



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      shopping:ShoppingReducer,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
