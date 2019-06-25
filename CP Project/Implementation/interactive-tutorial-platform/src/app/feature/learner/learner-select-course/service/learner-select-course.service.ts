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
        return this.firestore.collection('comment', ref => ref.where('user.userId', '==', currentUser.userId)
            .where('courseId', '==', courseId)).snapshotChanges()
    }

    addComment(commentData: Comments) {
        return this.firestore.collection('comment').add(commentData)
    }

    updateComment(commentId, commentData: Comments) {
        return this.firestore.doc(`comment/${commentId}`).update(commentData)

    }

    deletComment(commentId) {
        return this.firestore.doc(`course/${commentId}`).delete()
    }
}
