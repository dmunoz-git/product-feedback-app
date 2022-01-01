import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIButtonComponent } from './ui-button.component';

describe('UIButtonComponent', () => {
    let component: UIButtonComponent;
    let fixture: ComponentFixture<UIButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UIButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UIButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('ui-button should be create', () => {
        component.color = 'primary';
        expect(component).toBeTruthy();
    });
});
