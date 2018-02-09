import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { MenuDirective } from './menu.directive';


@NgModule({
    imports: [
    ],
    declarations: [NavigationComponent, MenuDirective],
    exports: [NavigationComponent]
})
export class NavigationModule {}
