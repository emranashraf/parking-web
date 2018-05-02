import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyFormComponent, CompanyListComponent]
})
export class CompanyModule { }
