import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthissueOverviewComponent } from './healthissue-overview.component';

describe('HealthissueOverviewComponent', () => {
  let component: HealthissueOverviewComponent;
  let fixture: ComponentFixture<HealthissueOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthissueOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthissueOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
