import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Course} from '../../../Model/Course';

@Injectable({
    providedIn: 'root'
})
export class LearnerCourseService {
    currentCourse: Course = new Course();

    constructor(private firestore: AngularFirestore) {
    }

    getAllCourse() {
        return this.firestore.collection('course').snapshotChanges()
    }

    setCurrentCourse(currentCourse: Course) {
        this.currentCourse = currentCourse;
    }

    getCurrentCourse() {
        return this.currentCourse;
    }
}
