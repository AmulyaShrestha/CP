import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnerBaseComponent } from './learner-base/learner-base.component';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { LearnerCourseComponent } from './learner-course/learner-course.component';
import { LearnerBlogComponent } from './learner-blog/learner-blog.component';
import { LearnerContactComponent } from './learner-contact/learner-contact.component';

const learnerRoutes: Routes = [
  { path: '', component: LearnerBaseComponent, children: [
    { path: '', component: LearnerHomeComponent},
    { path: 'course', component: LearnerCourseComponent},
    { path: 'blog', component: LearnerBlogComponent},
    { path: 'contact', component: LearnerContactComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(learnerRoutes)
  ],
  exports: [RouterModule]
})
export class LearnerRoutingModule { }
