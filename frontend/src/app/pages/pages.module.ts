import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './pages-routing.module';
import { PagesComponent } from './authorization/pages.component';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
