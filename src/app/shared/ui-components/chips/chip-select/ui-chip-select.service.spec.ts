import { TestBed } from '@angular/core/testing';

import { UiChipSelectService } from './ui-chip-select.service';

describe('UiChipSelectService', () => {
  let service: UiChipSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiChipSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
