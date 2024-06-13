import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './components/product/productlist/productlist.component';
import { ProductdetailsComponent } from './components/product/productdetails/productdetails.component';
import { CategoryCreateComponent } from './components/category/categorycreate/categorycreate.component';
import { CategorylistComponent } from './components/category/categorylist/categorylist.component';
import { CategoryeditComponent } from './components/category/categoryedit/categoryedit.component';
import { CategorydetailsComponent } from './components/category/categorydetails/categorydetails.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

const routes: Routes = [

  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products', component: ProductlistComponent },
{ path: 'products/create', component: ProductFormComponent },
  { path: 'products/edit/:id', component: ProductFormComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: 'categories', component: CategorylistComponent },
  { path: 'categories/create', component: CategoryCreateComponent },
  { path: 'categories/edit/:id', component: CategoryeditComponent },
  { path: 'categories/:id', component: CategorydetailsComponent }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
