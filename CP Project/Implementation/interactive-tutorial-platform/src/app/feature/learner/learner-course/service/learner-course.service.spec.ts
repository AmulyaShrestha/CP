import { TestBed } from '@angular/core/testing';

import { LearnerCourseService } from './learner-course.service';

describe('LearnerCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearnerCourseService = TestBed.get(LearnerCourseService);
    expect(service).toBeTruthy();
  });
});
