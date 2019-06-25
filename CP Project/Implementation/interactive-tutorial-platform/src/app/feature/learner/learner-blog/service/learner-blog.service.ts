import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LearnerBlogService {

  constructor(private firestore: AngularFirestore) { }

  getAllBlog() {
    return this.firestore.collection('blog').snapshotChanges()
  }
}
