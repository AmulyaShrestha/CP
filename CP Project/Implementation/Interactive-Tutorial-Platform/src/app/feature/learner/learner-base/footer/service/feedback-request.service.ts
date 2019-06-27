import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class FeedbackRequestService {

    constructor(private firestore: AngularFirestore) {
    }

    sendFeedback(feedbackData) {
        return this.firestore.collection('feedback').add(feedbackData)
    }

    sendRequest(requestData) {
        return this.firestore.collection('request').add(requestData)
    }
}
