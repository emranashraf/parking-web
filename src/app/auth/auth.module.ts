import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../shared/layout/auth-layout/auth-layout.component';
import { routes } from './auth.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
