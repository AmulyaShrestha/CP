import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../../../Model/User';
import {Course} from '../../../Model/Course';

@Injectable({
    providedIn: 'root'
})
export class LearnerSelectCourseService {
    comment: Comment = new Comment();
    currentUser: User = new User();
    currentCourse: Course = new Course();

    constructor(private firestore: AngularFirestore) {
    }

    getAllComments() {

    }

    addComment(commentData: Comment, currentUser: User, currentCourse: Course) {
        return this.firestore.collection('comment')
    }

    updateComment() {

    }

    deletComment() {

    }
}
