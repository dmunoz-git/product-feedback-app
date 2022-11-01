import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiDividerComponent } from './ui-divider.component';

describe('DividerComponent', () => {
    let component: UiDividerComponent;
    let fixture: ComponentFixture<UiDividerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiDividerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiDividerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
