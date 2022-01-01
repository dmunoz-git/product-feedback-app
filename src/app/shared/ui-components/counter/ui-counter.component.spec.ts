import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICounterComponent } from './ui-counter.component';

describe('UICounterComponent', () => {
    let component: UICounterComponent;
    let fixture: ComponentFixture<UICounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UICounterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UICounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
