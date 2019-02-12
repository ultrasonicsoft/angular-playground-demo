import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    ProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
