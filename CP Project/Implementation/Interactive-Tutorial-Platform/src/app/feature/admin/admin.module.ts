import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminBaseComponent} from './admin-base/admin-base.component';
import {HeaderComponent} from './admin-base/header/header.component';
import {FooterComponent} from './admin-base/footer/footer.component';
import {CourseComponent} from './course/course.component';
import {BlogComponent} from './blog/blog.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {RequestsComponent} from './requests/requests.component';
import {UsersComponent} from './users/users.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { QuestionComponent } from './question/question.component';

@NgModule({
    declarations: [
        AdminBaseComponent,
        HeaderComponent,
        FooterComponent,
        CourseComponent,
        BlogComponent,
        FeedbackComponent,
        RequestsComponent,
        UsersComponent,
        QuestionComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminRoutingModule),
        SharedModuleModule
    ]
})
export class AdminModule {
}
