import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearnerBaseComponent} from './learner-base/learner-base.component';
import {FooterComponent} from './learner-base/footer/footer.component';
import {RouterModule} from '@angular/router';
import {LearnerBlogComponent} from './learner-blog/learner-blog.component';
import {LearnerCourseComponent} from './learner-course/learner-course.component';
import {LearnerContactComponent} from './learner-contact/learner-contact.component';
import {LearnerHomeComponent} from './learner-home/learner-home.component';
import {LearnerSelectCourseComponent} from './learner-select-course/learner-select-course.component';
import {LearnerRoutingModule} from './learner-routing.module';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { LearnerManualComponent } from './learner-manual/learner-manual.component';

@NgModule({
    declarations: [
        LearnerBaseComponent,
        FooterComponent,
        LearnerBlogComponent,
        LearnerCourseComponent,
        LearnerContactComponent,
        LearnerHomeComponent,
        LearnerSelectCourseComponent,
        LearnerManualComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(LearnerRoutingModule),
        SharedModuleModule
    ]
})
export class LearnerModule {
}
