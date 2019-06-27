import { TestBed } from '@angular/core/testing';

import { FeedbackRequestService } from './feedback-request.service';

describe('FeedbackRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackRequestService = TestBed.get(FeedbackRequestService);
    expect(service).toBeTruthy();
  });
});
