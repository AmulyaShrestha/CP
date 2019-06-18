import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnerBaseComponent } from './learner-base/learner-base.component';
import { HeaderComponent } from './learner-base/header/header.component';
import { FooterComponent } from './learner-base/footer/footer.component';
import { BackgroundComponent } from './learner-base/background/background.component';
import { SpinnerComponent } from './learner-base/spinner/spinner.component';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { LearnerCourseComponent } from './learner-course/learner-course.component';
import { LearnerBlogComponent } from './learner-blog/learner-blog.component';
import { LearnerContactComponent } from './learner-contact/learner-contact.component';
import { RouterModule } from '@angular/router';
import { LearnerRoutingModule } from './learner-routing.module';
import { ParticlesComponent } from './learner-base/background/particle/particle.component';

@NgModule({
  declarations: [LearnerBaseComponent, ParticlesComponent, HeaderComponent, FooterComponent, BackgroundComponent, SpinnerComponent, LearnerHomeComponent, LearnerCourseComponent, LearnerBlogComponent, LearnerContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    LearnerRoutingModule
  ]
})
export class LearnerModule { }
