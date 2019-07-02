import { TestBed } from '@angular/core/testing';

import { TestfulService } from './testful.service';

describe('TestfulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestfulService = TestBed.get(TestfulService);
    expect(service).toBeTruthy();
  });
});
