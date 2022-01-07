import { TestBed } from '@angular/core/testing';

import { UiChipListService } from './ui-chip-list.service';

describe('UiChipListService', () => {
  let service: UiChipListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiChipListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
