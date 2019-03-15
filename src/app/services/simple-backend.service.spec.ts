import { TestBed } from '@angular/core/testing';

import { SimpleBackendService } from './simple-backend.service';

describe('SimpleBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleBackendService = TestBed.get(SimpleBackendService);
    expect(service).toBeTruthy();
  });
});
