import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/laout/header/header.component';
import { SidebarComponent } from './components/laout/sidebar/sidebar.component';
import { ProductlistComponent } from './components/product/productlist/productlist.component';
import { ProductdetailsComponent } from './components/product/productdetails/productdetails.component';
import { CategoryCreateComponent } from './components/category/categorycreate/categorycreate.component';
import { CategoryeditComponent } from './components/category/categoryedit/categoryedit.component';
import { CategorylistComponent } from './components/category/categorylist/categorylist.component';
import { CategorydetailsComponent } from './components/category/categorydetails/categorydetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    CategoryCreateComponent,
    CategoryeditComponent,
    CategorylistComponent,
    CategorydetailsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
