import {Injectable} from '@angular/core';
import {Course} from '../../../feature/Model/Course';

@Injectable({
    providedIn: 'root'
})
export class CurrentCourseService {
    currentCourse: Course = new Course();

    constructor() {
    }

    setCurrentCourse(currentCourse: Course) {
        this.currentCourse = currentCourse;
    }

    getCurrentCourse() {
        return this.currentCourse;
    }
}
