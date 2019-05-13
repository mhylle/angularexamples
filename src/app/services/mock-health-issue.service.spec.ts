import { TestBed } from '@angular/core/testing';

import { MockHealthIssueService } from './mock-health-issue.service';

describe('MockHealthIssueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockHealthIssueService = TestBed.get(MockHealthIssueService);
    expect(service).toBeTruthy();
  });
});
