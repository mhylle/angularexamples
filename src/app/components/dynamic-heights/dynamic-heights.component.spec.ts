import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHeightsComponent } from './dynamic-heights.component';

describe('DynamicHeightsComponent', () => {
  let component: DynamicHeightsComponent;
  let fixture: ComponentFixture<DynamicHeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
