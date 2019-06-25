import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private firestore: AngularFirestore) { }

  deleteFeedback(feedbackId) {
    return this.firestore.doc(`feedback/${feedbackId}`).delete()
  }

  getAllFeedback() {
    return this.firestore.collection('feedback').snapshotChanges()
  }
}
