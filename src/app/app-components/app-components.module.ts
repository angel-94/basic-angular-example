import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsRoutingModule} from './components-routing.module';
import {AppComponentsComponent} from './app-components.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {RolesComponent} from './roles/roles.component';
import {HelpComponent} from './help/help.component';
import {FormsModule} from "@angular/forms";
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import { MenuComponent } from './menu/menu.component';
import { RolesTablesComponent } from './roles/roles-tables/roles-tables.component';
import { UserTablesComponent } from './user/user-tables/user-tables.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [
    AppComponentsComponent,
    HomeComponent,
    UserComponent,
    RolesComponent,
    HelpComponent,
    MenuComponent,
    RolesTablesComponent,
    UserTablesComponent  ]
})
export class AppComponentsModule {
}
