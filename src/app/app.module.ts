import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './components/cart/cart.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { ContactComponent } from './components/contact/contact.component';



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
    CartComponent,
    CartDetailComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
