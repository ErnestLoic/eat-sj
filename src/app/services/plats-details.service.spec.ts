import { TestBed } from '@angular/core/testing';

import { PlatsDetailsService } from './plats-details.service';

describe('PlatsDetailsService', () => {
  let service: PlatsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
