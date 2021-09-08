import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";
import {CartComponent} from "./components/cart/cart.component";
import {CartDetailComponent} from "./components/cart-detail/cart-detail.component";
import {ContactComponent} from "./components/contact/contact.component";


const routes: Routes = [
  {
    path:'',
    redirectTo : 'home',
    pathMatch:'full'
  },

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'shop',
    component:ProductComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'cartDetail',
    component:CartDetailComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
