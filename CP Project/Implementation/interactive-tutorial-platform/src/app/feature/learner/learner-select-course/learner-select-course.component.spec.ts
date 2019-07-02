import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSelectCourseComponent } from './learner-select-course.component';
import {LearnerSelectCourseService} from './service/learner-select-course.service';

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
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  /*it ('should change the course status as per input', () => {
    const fixtureN = TestBed.createComponent(LearnerSelectCourseComponent);
    const learnerSelectCourseComponent = fixtureN.debugElement.componentInstance;
    const courseStatusService = fixtureN.debugElement.injector.get(LearnerSelectCourseService);
    fixtureN.detectChanges();
    expect(courseStatusService.courseStatus.status).toEqual(learnerSelectCourseComponent.courseStatus.status);
  })*/

  /*it ('should bind the comment data from comment service to view at runtime', () => {
    const fixtureN = TestBed.createComponent(LearnerSelectCourseComponent);
    const learnerSelectCourseComponent = fixtureN.debugElement.componentInstance;
    const commentService = fixtureN.debugElement.injector.get(LearnerSelectCourseService);
    fixtureN.detectChanges();
    expect(commentService.learnerComment.details).toEqual(learnerSelectCourseComponent.learnerComment.details);
  })*/

 /* it ('should retrieve selected course question list', () => {
    const fixtureN = TestBed.createComponent(LearnerSelectCourseComponent);
    const learnerSelectCourseComponent = fixtureN.debugElement.componentInstance;
    const questionsService = fixtureN.debugElement.injector.get(LearnerSelectCourseService);
    fixtureN.detectChanges();
    expect(questionsService.questionList).toEqual(learnerSelectCourseComponent.questionList);
  })*/

  /*it ('should bind obtained points data from service to view at runtime', () => {
    const fixtureN = TestBed.createComponent(LearnerSelectCourseComponent);
    const learnerSelectCourseComponent = fixtureN.debugElement.componentInstance;
    const pointService = fixtureN.debugElement.injector.get(LearnerSelectCourseService);
    fixtureN.detectChanges();
    expect(pointService.points.obtainedPoints).toEqual(learnerSelectCourseComponent.points.obtainedPoints);
  })*/

  /*it ('should only access the owner of a particular comment have access to edit or delete it', () => {
    const fixtureN = TestBed.createComponent(LearnerSelectCourseComponent);
    const learnerSelectCourseComponent = fixtureN.debugElement.componentInstance;
    const pointService = fixtureN.debugElement.injector.get(LearnerSelectCourseService);
    fixtureN.detectChanges();
    expect(pointService.learnerComment.userId).toEqual(learnerSelectCourseComponent.learnerComment.userId);
  })*/
});
