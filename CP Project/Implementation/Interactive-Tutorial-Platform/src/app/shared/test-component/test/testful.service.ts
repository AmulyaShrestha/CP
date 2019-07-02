import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestfulService {
  addFeedbackDetails = 'feedback';
  addCourseRequest = 'course request';
  constructor() { }
}
