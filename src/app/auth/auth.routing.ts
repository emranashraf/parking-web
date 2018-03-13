import { AuthLayoutComponent } from '../shared/layout/auth-layout/auth-layout.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        data: { pageTitle: 'Login' },
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
  ];
