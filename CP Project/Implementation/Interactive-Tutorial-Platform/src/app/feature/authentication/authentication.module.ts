import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BaseComponent} from './base/base.component';
import {FooterComponent} from './base/footer/footer.component';
import {RouterModule} from '@angular/router';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SharedModuleModule} from '../shared-module/shared-module.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        BaseComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthenticationRoutingModule),
        SharedModuleModule
    ],
})
export class AuthenticationModule {
}
