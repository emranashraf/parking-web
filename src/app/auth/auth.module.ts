import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../shared/layout/auth-layout/auth-layout.component';
import { routes } from './auth.routing';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
