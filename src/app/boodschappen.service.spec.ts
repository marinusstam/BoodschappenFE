import { TestBed } from '@angular/core/testing';

import { BoodschappenService } from './boodschappen.service';

describe('BoodschappenService', () => {
  let service: BoodschappenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoodschappenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
