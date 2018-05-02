import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../shared/layout/main-layout/main-layout.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';


const routes: Routes = [
  { path: 'company',
    component: MainLayoutComponent,
    data: { pageTitle: 'Company' },
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: CompanyListComponent, data: { pageTitle: 'Company List' }
      },
      {
        path: 'form', component: CompanyFormComponent, data: { pageTitle: 'Company Form' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
