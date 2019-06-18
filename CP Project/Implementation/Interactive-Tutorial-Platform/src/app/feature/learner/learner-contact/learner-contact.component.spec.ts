import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerContactComponent } from './learner-contact.component';

describe('LearnerContactComponent', () => {
  let component: LearnerContactComponent;
  let fixture: ComponentFixture<LearnerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
