import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoucementListModule } from './annoucement-list/annoucement-list.module';
import { EmployeeListModule } from './employee-list/employee-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnnoucementListModule,
    EmployeeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
