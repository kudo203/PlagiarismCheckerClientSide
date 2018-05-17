import { TestBed, inject } from '@angular/core/testing';

import { ResetHomeService } from './reset-to-home.service';

describe('ResetToHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetHomeService]
    });
  });

  it('should be created', inject([ResetHomeService], (service: ResetHomeService) => {
    expect(service).toBeTruthy();
  }));
});
