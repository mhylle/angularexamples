import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSortingComponent } from './async-sorting.component';

describe('AsyncSortingComponent', () => {
  let component: AsyncSortingComponent;
  let fixture: ComponentFixture<AsyncSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
