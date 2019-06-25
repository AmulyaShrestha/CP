import {Routes} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const AuthenticationRoutingModule: Routes = [
  {
    path: '', component: BaseComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];
