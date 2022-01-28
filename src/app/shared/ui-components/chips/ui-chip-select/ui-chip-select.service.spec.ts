import { TestBed } from '@angular/core/testing';
import { UIChipSelectService } from './ui-chip-select.service';

describe('UIChipSelectService', () => {
    let service: UIChipSelectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UIChipSelectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
