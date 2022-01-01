import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIChipComponent } from './ui-chip.component';

describe('UIChipComponent', () => {
    let component: UIChipComponent;
    let fixture: ComponentFixture<UIChipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UIChipComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UIChipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
