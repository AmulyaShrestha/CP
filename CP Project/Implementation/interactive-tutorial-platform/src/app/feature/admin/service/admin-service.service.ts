import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Course} from '../../Model/Course';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  course: Course = new Course();

  constructor(private firestore: AngularFirestore ) { }

  addCourse(courseData) {
    this.firestore.collection('course').add(courseData);
  }
}
