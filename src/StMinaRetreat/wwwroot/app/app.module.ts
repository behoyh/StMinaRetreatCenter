import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HwComponent }   from './app.componentHW';
import { ProductService } from './product.service';
import {ProductForm } from './productForm';
 
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule],
  declarations: [ HwComponent, ProductForm],
  providers: [
        ProductService
  ],
  bootstrap:    [  HwComponent, ProductForm]
})
export class AppModule { }
