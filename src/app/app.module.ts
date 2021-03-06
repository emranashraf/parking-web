import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './shared/layout/layout.module';
import {
  AuthActions,
  reducer,
  AuthEffects,
  AuthService
} from 'parking-core';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Auth Module
    AuthModule,

    // Layouts
    LayoutModule,

    // company
    CompanyModule,

    StoreModule.forRoot({ auth: reducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
