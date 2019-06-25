import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  deleteUser(userId) {
    return this.firestore.doc(`user/${userId}`).delete()
  }

  getAllUser() {
    return this.firestore.collection('user').snapshotChanges()
  }
}
