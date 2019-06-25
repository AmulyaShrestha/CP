import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminRouteGuard } from './shared/global-services/admin-guard/admin-route.guard';

const routes: Routes = [
    { path: '', redirectTo: 'learner', pathMatch: 'full' },
    { path: 'learner', loadChildren: './feature/learner/learner.module#LearnerModule'},
    { path: 'admin', canLoad: [AdminRouteGuard], loadChildren: './feature/admin/admin.module#AdminModule'},
    { path: 'authentication', loadChildren: './feature/authentication/authentication.module#AuthenticationModule'},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
