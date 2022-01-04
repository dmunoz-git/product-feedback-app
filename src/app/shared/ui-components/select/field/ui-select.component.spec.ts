import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISelectComponent } from './ui-select.component';

describe('UISelectComponent', () => {
  let component: UISelectComponent;
  let fixture: ComponentFixture<UISelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UISelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UISelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
