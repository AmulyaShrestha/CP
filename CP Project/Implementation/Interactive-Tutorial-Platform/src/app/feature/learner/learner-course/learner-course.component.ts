import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../Model/Course';
import {LearnerCourseService} from './service/learner-course.service';

@Component({
    selector: 'app-learner-course',
    templateUrl: './learner-course.component.html',
    styleUrls: ['./learner-course.component.scss']
})
export class LearnerCourseComponent implements OnInit {
    courseList: Array<Course> = new Array<Course>();

    constructor(private router: Router,
                private courseService: LearnerCourseService) {
    }

    ngOnInit() {
        this.getCourseList();
    }

    getCourseList() {
        this.courseService.getAllCourse().subscribe(response => {
            this.courseList = response.map(singleCourse => {
                return {
                    courseId: singleCourse.payload.doc.id,
                    ...singleCourse.payload.doc.data()
                } as Course;
            })
        });
    }

    onSelect(currentCourse: Course) {
        this.courseService.setCurrentCourse(currentCourse);
        this.router.navigate(['learner/coursecontent'])
    }

}
