import { TestBed } from '@angular/core/testing';

import { LearnerSelectCourseService } from './learner-select-course.service';

describe('LearnerSelectCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearnerSelectCourseService = TestBed.get(LearnerSelectCourseService);
    expect(service).toBeTruthy();
  });
});
