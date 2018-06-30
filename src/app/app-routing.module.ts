import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BlankLayoutComponent} from "./blank-layout/blank-layout.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";


const ROUTE_APP: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginModule'
      }
    ]
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './app-components/app-components.module#AppComponentsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTE_APP,
      {
        useHash: true
      }
    )
  ], exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
