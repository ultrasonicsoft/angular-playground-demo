import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
