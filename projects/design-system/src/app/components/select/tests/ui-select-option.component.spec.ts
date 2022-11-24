import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSelectOptionComponent } from '../ui-select-option.component';

describe('UiSelectOptionComponent', () => {
    let component: UiSelectOptionComponent;
    let fixture: ComponentFixture<UiSelectOptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiSelectOptionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiSelectOptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
