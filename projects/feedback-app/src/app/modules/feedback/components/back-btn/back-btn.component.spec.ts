import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiIconModule } from '@components/icon/ui-icon.module';
import { BackBtnComponent } from './back-btn.component';

describe('BackBtnComponent', () => {
    let component: BackBtnComponent;
    let fixture: ComponentFixture<BackBtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BackBtnComponent],
            imports: [UiIconModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BackBtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
