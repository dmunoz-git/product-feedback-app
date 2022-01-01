import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDividerComponent } from './ui-divider.component';

describe('UIDividerComponent', () => {
  let component: UIDividerComponent;
  let fixture: ComponentFixture<UIDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
