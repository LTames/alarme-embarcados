import { TestBed } from '@angular/core/testing';

import { MotionDataService } from './motion-data.service';

describe('MotionDataService', () => {
  let service: MotionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
