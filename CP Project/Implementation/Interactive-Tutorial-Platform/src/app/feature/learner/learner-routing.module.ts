import {LearnerHomeComponent} from './learner-home/learner-home.component';
import {Routes} from '@angular/router';
import {LearnerCourseComponent} from './learner-course/learner-course.component';
import {LearnerSelectCourseComponent} from './learner-select-course/learner-select-course.component';
import {LearnerBlogComponent} from './learner-blog/learner-blog.component';
import {LearnerBaseComponent} from './learner-base/learner-base.component';
import {LearnerManualComponent} from './learner-manual/learner-manual.component';

export const LearnerRoutingModule: Routes = [
    {
        path: '', component: LearnerBaseComponent, children: [
            {path: '', component: LearnerHomeComponent},
            {path: 'course', component: LearnerCourseComponent},
            {path: 'coursecontent', component: LearnerSelectCourseComponent},
            {path: 'blog', component: LearnerBlogComponent},
            {path: 'manual', component: LearnerManualComponent}
        ]
    }
];
