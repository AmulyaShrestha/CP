import {CourseContent} from './courseContent';

export class Course {
    courseId: string;
    mainTitle: string;
    infoContent: string;
    courseContent: Array<CourseContent>;
}
