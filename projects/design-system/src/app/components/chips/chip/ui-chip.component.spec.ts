import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiChipComponent } from './ui-chip.component';

describe('UiChipComponent', () => {
    let component: UiChipComponent;
    let fixture: ComponentFixture<UiChipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiChipComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiChipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
