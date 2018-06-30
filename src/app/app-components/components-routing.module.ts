import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {RolesComponent} from "./roles/roles.component";
import {HelpComponent} from "./help/help.component";
import {AppComponentsComponent} from "./app-components.component";
import {RolesTablesComponent} from "./roles/roles-tables/roles-tables.component";
import {UserTablesComponent} from "./user/user-tables/user-tables.component";

const APP_COMP: Routes = [
  {
    path: '',
    component: AppComponentsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: 'user-tables',
            component: UserTablesComponent
          }
        ]
      },
      {
        path: 'roles',
        component: RolesComponent,
        children: [
          {
            path: 'roles-tables',
            component: RolesTablesComponent
          }
        ]
      },
      {
        path: 'help',
        component: HelpComponent
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(APP_COMP)
  ], exports: [
    RouterModule
  ],
  declarations: []
})
export class ComponentsRoutingModule {
}
