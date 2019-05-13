import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIssueSliderComponent } from './health-issue-slider.component';

describe('HealthIssueSliderComponent', () => {
  let component: HealthIssueSliderComponent;
  let fixture: ComponentFixture<HealthIssueSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthIssueSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthIssueSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
