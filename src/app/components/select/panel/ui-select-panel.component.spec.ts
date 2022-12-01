import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSelectPanelComponent } from './ui-select-panel.component';

describe('UiSelectPanelComponent', () => {
    let component: UiSelectPanelComponent;
    let fixture: ComponentFixture<UiSelectPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiSelectPanelComponent],
            imports: [OverlayModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiSelectPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
