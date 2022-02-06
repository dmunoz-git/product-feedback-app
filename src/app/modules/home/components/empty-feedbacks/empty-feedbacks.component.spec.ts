import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFeedbacksComponent } from './empty-feedbacks.component';

describe('EmptyFeedbacksComponent', () => {
  let component: EmptyFeedbacksComponent;
  let fixture: ComponentFixture<EmptyFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyFeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
