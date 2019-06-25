import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSelectCourseComponent } from './learner-select-course.component';

describe('LearnerSelectCourseComponent', () => {
  let component: LearnerSelectCourseComponent;
  let fixture: ComponentFixture<LearnerSelectCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerSelectCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerSelectCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
