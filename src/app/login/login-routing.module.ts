import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";

const LOGIN: Routes = [

  {
    path: '',
    component: LoginComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN)
  ],
  declarations: []
})
export class LoginRoutingModule {
}
