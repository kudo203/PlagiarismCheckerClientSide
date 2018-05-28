import { TestBed, inject } from '@angular/core/testing';

import { GetMatchService } from './get-match.service';

describe('GetMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMatchService]
    });
  });

  it('should be created', inject([GetMatchService], (service: GetMatchService) => {
    expect(service).toBeTruthy();
  }));
});
