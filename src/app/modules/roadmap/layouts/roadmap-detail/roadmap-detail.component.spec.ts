import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapDetailComponent } from './roadmap-detail.component';

describe('RoadmapDetailComponent', () => {
  let component: RoadmapDetailComponent;
  let fixture: ComponentFixture<RoadmapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
