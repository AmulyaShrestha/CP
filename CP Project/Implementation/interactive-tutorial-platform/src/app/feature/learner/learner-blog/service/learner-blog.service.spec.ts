import { TestBed } from '@angular/core/testing';

import { LearnerBlogService } from './learner-blog.service';

describe('LearnerBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearnerBlogService = TestBed.get(LearnerBlogService);
    expect(service).toBeTruthy();
  });
});
