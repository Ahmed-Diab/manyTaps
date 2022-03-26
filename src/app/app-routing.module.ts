import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountresComponent } from './countres/countres.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
  const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'products',
    loadChildren:() => import("../app/products/product.module").then(m=>m.ProductModule)
   },
  {
    path: 'cuntries',
    component: CountresComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
