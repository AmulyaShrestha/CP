import {Routes} from '@angular/router';
import {AdminBaseComponent} from './admin-base/admin-base.component';
import {CourseComponent} from './course/course.component';
import {BlogComponent} from './blog/blog.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {RequestsComponent} from './requests/requests.component';
import {UsersComponent} from './users/users.component';
import {QuestionComponent} from './question/question.component';

export const AdminRoutingModule: Routes = [
  {
    path: '', component: AdminBaseComponent, children: [
      {path: '', redirectTo: 'course', pathMatch: 'full'},
      {path: 'course', component: CourseComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'requests', component: RequestsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'question', component: QuestionComponent}
    ]
  }
];
