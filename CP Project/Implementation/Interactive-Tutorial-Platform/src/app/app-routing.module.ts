import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'learner', loadChildren: () => import('./feature/learner/learner.module').then(m => m.LearnerModule)},
  {path: 'authentication', loadChildren: () => import('./feature/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'admin', loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
