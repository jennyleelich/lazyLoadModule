import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoucementListComponent } from './annoucement-list.component';
import { RouterModule } from '@angular/router';
import { ANNOUNCEMENT_ROUTES } from './announcement.routes';



@NgModule({
  declarations: [
    AnnoucementListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ANNOUNCEMENT_ROUTES)
  ]
})
export class AnnoucementListModule { }
