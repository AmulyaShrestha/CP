import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerCourseComponent } from './learner-course.component';

describe('LearnerCourseComponent', () => {
  let component: LearnerCourseComponent;
  let fixture: ComponentFixture<LearnerCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
