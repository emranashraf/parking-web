import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' },
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent, data: { pageTitle: 'Dashboard' }
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
export class AppRoutingModule { }
