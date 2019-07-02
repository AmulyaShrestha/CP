import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {CurrentUserService} from '../../../shared/global-services/currentUser-service/current-user.service';
import {CourseService} from './service/course.service';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  /*it ('should add course details', () => {
    const fixtureN = TestBed.createComponent(CourseComponent);
    const courseComponent = fixtureN.debugElement.componentInstance;
    const courseService = fixtureN.debugElement.injector.get(CourseService);
    fixtureN.detectChanges();
    expect(courseService.addCourseDetails).toEqual(courseComponent.courseResponse);
  })*/
});
