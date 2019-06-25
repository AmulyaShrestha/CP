import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private firestore: AngularFirestore) { }

  deleteRequest(requestId) {
    return this.firestore.doc(`request/${requestId}`).delete()
  }

  getAllRequest() {
    return this.firestore.collection('request').snapshotChanges()
  }
}
