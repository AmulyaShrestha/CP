import { TestBed } from '@angular/core/testing';

import { CurrentCourseService } from './current-course.service';

describe('CurrentCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentCourseService = TestBed.get(CurrentCourseService);
    expect(service).toBeTruthy();
  });
});
