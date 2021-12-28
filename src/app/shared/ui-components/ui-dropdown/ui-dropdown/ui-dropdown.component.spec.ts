import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDropdownComponent } from './ui-dropdown.component';

describe('UIDropdownComponent', () => {
  let component: UIDropdownComponent;
  let fixture: ComponentFixture<UIDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
