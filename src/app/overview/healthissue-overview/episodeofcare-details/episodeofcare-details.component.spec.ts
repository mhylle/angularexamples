import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeofcareDetailsComponent } from './episodeofcare-details.component';

describe('EpisodeofcareDetailsComponent', () => {
  let component: EpisodeofcareDetailsComponent;
  let fixture: ComponentFixture<EpisodeofcareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeofcareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeofcareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
