import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIChipSelectComponent } from './ui-chip-select.component';

describe('UiChipSelectComponent', () => {
    let component: UIChipSelectComponent;
    let fixture: ComponentFixture<UIChipSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UIChipSelectComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UIChipSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
