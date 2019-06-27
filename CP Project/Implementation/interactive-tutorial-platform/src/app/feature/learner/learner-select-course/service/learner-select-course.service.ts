import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../../../Model/User';
import {Comments} from '../../../Model/Comments';

@Injectable({
    providedIn: 'root'
})
export class LearnerSelectCourseService {
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
}
