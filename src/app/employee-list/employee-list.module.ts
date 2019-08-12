import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { RouterModule } from '@angular/router';
import { EMPLOYEE_ROUTES } from './employee.routes';
import { MaleEmployeeComponent } from './male-employee/male-employee.component';
import { FemaleEmployeeComponent } from './female-employee/female-employee.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    MaleEmployeeComponent,
    FemaleEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EMPLOYEE_ROUTES)
  ]
})
export class EmployeeListModule { }
