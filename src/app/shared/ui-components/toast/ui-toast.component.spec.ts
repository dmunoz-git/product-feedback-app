import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIToastComponent } from './ui-toast.component';

describe('UIToastComponent', () => {
    let component: UIToastComponent;
    let fixture: ComponentFixture<UIToastComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UIToastComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UIToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
