import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISelectorComponent } from './ui-selector.component';

describe('UISelectorComponent', () => {
  let component: UISelectorComponent;
  let fixture: ComponentFixture<UISelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UISelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UISelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
