import { TestBed, inject } from '@angular/core/testing';

import { GetReportService } from './get-report.service';

describe('GetReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetReportService]
    });
  });

  it('should be created', inject([GetReportService], (service: GetReportService) => {
    expect(service).toBeTruthy();
  }));
});
