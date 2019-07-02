import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../../../Model/User';
import {Comments} from '../../../Model/Comments';

@Injectable({
    providedIn: 'root'
})
export class LearnerSelectCourseService {
    /*courseStatus = {status: 'read'};
    learnerComment = {details: 'this is a good course !!', userId: 'asd'};
    questionList = [{question: null, answer: null}];
    points = {obtainedPoints: 50}*/
    comment: Comments = new Comments();

    constructor(private firestore: AngularFirestore) {
    }

    getAllComments(currentUser: User, courseId: string) {
        return this.firestore.collection('comment', ref => ref
            .where('courseId', '==', courseId)).snapshotChanges()
    }

    addComment(commentData: Comments) {
        return this.firestore.collection('comment').add(commentData)
    }

    updateComment(commentId, commentData: Comments) {
        return this.firestore.doc(`comment/${commentId}`).update(commentData)
    }

    deleteComment(commentId) {
        return this.firestore.doc(`comment/${commentId}`).delete()
    }

    addMarkedStatus(markedStatus) {
        return this.firestore.collection('markedCourse').add(markedStatus)
    }

    getMarkedStatus(currentUserId: string, courseId: string) {
        return this.firestore.collection('markedCourse', ref => ref.where('userId', '==', currentUserId)
            .where('courseId', '==', courseId)).snapshotChanges()
    }

    deleteMarkedStatus(statusId) {
        return this.firestore.doc(`markedCourse/${statusId}`).delete()
    }

    proceedAnswers(points) {
        return this.firestore.collection('points').add(points)
    }

    getPoints(userId, courseId) {
        return this.firestore.collection('points', ref => ref.where('userId', '==', userId)
            .where('courseId', '==', courseId)).snapshotChanges()
    }
}
