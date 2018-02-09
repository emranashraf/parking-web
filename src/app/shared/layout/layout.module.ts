import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from '../user/logout/logout.component';
import { SharedModule } from '../shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        NavigationModule
    ],
    declarations: [
        MainLayoutComponent,
        EmptyLayoutComponent,
        AuthLayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: []
})
export class LayoutModule {}
