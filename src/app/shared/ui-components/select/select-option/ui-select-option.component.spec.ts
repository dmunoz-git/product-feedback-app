import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISelectOptionComponent } from './ui-select-option.component';

describe('UISelectOptionComponent', () => {
  let component: UISelectOptionComponent;
  let fixture: ComponentFixture<UISelectOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UISelectOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UISelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
