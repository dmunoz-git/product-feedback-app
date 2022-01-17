import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsLayoutComponent } from './suggestions-layout.component';

describe('SuggestionsLayoutComponent', () => {
  let component: SuggestionsLayoutComponent;
  let fixture: ComponentFixture<SuggestionsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
