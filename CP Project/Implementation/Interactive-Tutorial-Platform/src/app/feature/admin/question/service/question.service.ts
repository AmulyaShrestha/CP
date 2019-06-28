import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(private firestore: AngularFirestore) {
    }

    getCourseQuestionById(courseId) {
        return this.firestore.collection('courseQuestion', ref => ref.where('courseId', '==', courseId))
            .snapshotChanges()
    }

    addCourseQuestion(courseQuestion) {
        return this.firestore.collection('courseQuestion').add(courseQuestion)
    }

    updateCourseQuestion(docId, courseQuestion) {
        return this.firestore.doc(`courseQuestion/${docId}`).update(courseQuestion)
    }

    deleteCourseQuestion(courseId) {
        return this.firestore.doc(`courseQuestion/${courseId}`).delete()
    }
}
