import { TestBed } from '@angular/core/testing';

import { UIToastService } from './ui-toast.service';

describe('UIToastService', () => {
    let service: UIToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UIToastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
