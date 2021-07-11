import { TestBed } from '@angular/core/testing';

import { AbteilungenDataService } from './abteilungen-data.service';

describe('AbteilungenDataService', () => {
  let service: AbteilungenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbteilungenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
