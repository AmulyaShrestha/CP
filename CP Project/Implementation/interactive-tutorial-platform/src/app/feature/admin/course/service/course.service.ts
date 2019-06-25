import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private firestore: AngularFirestore) {
    }

    addCourse(courseData) {
        return this.firestore.collection('course').add(courseData)
    }

    updateCourse(courseId, courseData) {
        return this.firestore.doc(`course/${courseId}`).update(courseData)
    }

    deleteCourse(courseId) {
        return this.firestore.doc(`course/${courseId}`).delete()
    }

    getAllCourse() {
        return this.firestore.collection('course').snapshotChanges()
    }
}
