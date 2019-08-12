import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { path: 'announcement', loadChildren: './annoucement-list/annoucement-list.module#AnnoucementListModule'},
 { path: 'employee', loadChildren: './employee-list/employee-list.module#EmployeeListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
