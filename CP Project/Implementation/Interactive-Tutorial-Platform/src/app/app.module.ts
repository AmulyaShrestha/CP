import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SharedModuleModule} from './feature/shared-module/shared-module.module';
import {environment} from '../environments/environment';
import {AuthService} from './feature/authentication/service/auth.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import { TestComponent } from './shared/test-component/test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TestComponent
    ],
    imports: [
        BrowserAnimationsModule,
        SharedModuleModule,
        RouterModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        NgxSpinnerModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
