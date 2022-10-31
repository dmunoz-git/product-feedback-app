import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackService } from '@core/http/feedback.service';
import { FeedbackFormComponent } from './feedback-form.component';

describe('FeedbackFormComponent', () => {
    let component: FeedbackFormComponent;
    let fixture: ComponentFixture<FeedbackFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeedbackFormComponent],
            imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
            providers: [FeedbackService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedbackFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should init title and description field with empty value and category with a default value', () => {
        expect(component.title?.value).toHaveLength(0);
        expect(component.description?.value).toHaveLength(0);
        expect(component.category?.value).toBeDefined();
    });

    it('should title and description fields be required', () => {
        expect(component.title?.hasError('required')).toBeTruthy();
        expect(component.description?.hasError('required')).toBeTruthy();
    });

    it('should be invalid if title is empty', () => {
        component.description?.setValue('Test description');
        expect(component.description?.hasError('required')).toBeFalsy();
        expect(component.feedbackForm.invalid).toBeTruthy();
    });

    it('should be invalid if description is empty', () => {
        component.title?.setValue('Test title');
        expect(component.title?.hasError('required')).toBeFalsy();
        expect(component.feedbackForm.invalid).toBeTruthy();
    });
});
