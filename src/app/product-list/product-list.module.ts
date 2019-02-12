import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  exports: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductListModule { }
