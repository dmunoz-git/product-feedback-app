import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UiToolbarModule } from '@components/toolbar/ui-toolbar.module';
import { FeedbackService } from '@core/http/feedback.service';
import { FeedbackModule } from '@modules/feedback/feedback.module';
import { FeedbackDetailComponent } from './feedback-detail.component';

describe('FeedbackDetailComponent', () => {
    let component: FeedbackDetailComponent;
    let fixture: ComponentFixture<FeedbackDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeedbackDetailComponent],
            imports: [RouterTestingModule, UiToolbarModule, FeedbackModule],
            providers: [FeedbackService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedbackDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
