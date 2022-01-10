import { TestBed } from '@angular/core/testing';

import { MockbackendInterceptor } from './mockbackend.interceptor';

describe('MockbackendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockbackendInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockbackendInterceptor = TestBed.inject(MockbackendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
