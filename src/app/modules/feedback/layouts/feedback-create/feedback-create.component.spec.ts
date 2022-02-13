import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackCreateComponent } from './feedback-create.component';

describe('FeedbackCreateComponent', () => {
    let component: FeedbackCreateComponent;
    let fixture: ComponentFixture<FeedbackCreateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeedbackCreateComponent],
            imports: [ReactiveFormsModule, FormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedbackCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should init title and detail field with empty value and category with a default value', () => {
        expect(component.title?.value).toHaveLength(0);
        expect(component.detail?.value).toHaveLength(0);
        expect(component.category?.value).toBeDefined();
    });

    it('should title and detail fields be required', () => {
        expect(component.title?.hasError('required')).toBeTruthy();
        expect(component.detail?.hasError('required')).toBeTruthy();
    });

    it('should be invalid if title is empty', () => {
        component.detail?.setValue('Test detail');
        expect(component.detail?.hasError('required')).toBeFalsy();
        expect(component.feedbackForm.invalid).toBeTruthy();
    });

    it('should be invalid if detail is empty', () => {
        component.title?.setValue('Test title');
        expect(component.title?.hasError('required')).toBeFalsy();
        expect(component.feedbackForm.invalid).toBeTruthy();
    });
});
