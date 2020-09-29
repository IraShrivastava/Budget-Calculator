import { TestBed } from '@angular/core/testing';

import { BudgetHttpService } from './budget-http.service';

describe('BudgetHttpService', () => {
  let service: BudgetHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
