import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISelectPanelComponent } from './ui-select-panel.component';

describe('UISelectPanelComponent', () => {
    let component: UISelectPanelComponent;
    let fixture: ComponentFixture<UISelectPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UISelectPanelComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UISelectPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
