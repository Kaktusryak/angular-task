import { TestBed } from '@angular/core/testing';

import { CSVDownloadService } from './csvdownload.service';

describe('CSVDownloadService', () => {
  let service: CSVDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSVDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
