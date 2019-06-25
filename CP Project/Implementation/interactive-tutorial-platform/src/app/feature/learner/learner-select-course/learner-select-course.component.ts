import {Component, OnInit} from '@angular/core';
import {Course} from '../../Model/Course';
import {User} from '../../Model/User';
import {CurrentUserService} from '../../../shared/global-services/currentUser-service/current-user.service';
import {LearnerCourseService} from '../learner-course/service/learner-course.service';

@Component({
    selector: 'app-learner-select-course',
    templateUrl: './learner-select-course.component.html',
    styleUrls: ['./learner-select-course.component.scss']
})
export class LearnerSelectCourseComponent implements OnInit {
    currentCourse: Course = new Course();
    currentUser: User = new User();

    constructor(private currentCourseService: LearnerCourseService,
                private currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        this.currentCourse = this.currentCourseService.getCurrentCourse();
        this.currentUser = this.currentUserService.getCurrentUser();
    }

}
