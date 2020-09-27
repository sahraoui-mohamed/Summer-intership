import { TestBed } from '@angular/core/testing';

import { HttpCreditService } from './http-credit.service';

describe('HttpCreditService', () => {
  let service: HttpCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
