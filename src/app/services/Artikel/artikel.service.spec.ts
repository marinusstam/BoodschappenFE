import { TestBed } from '@angular/core/testing';
import { ArtikelService } from './artikel.service';

describe('BoodschappenService', () => {
  let service: ArtikelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
