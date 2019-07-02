import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {NavbarComponent} from '../../navbar/navbar.component';
import {CurrentUserService} from '../../global-services/currentUser-service/current-user.service';
import {TestfulService} from './testful.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should add feedback details', () => {
    const fixtureN = TestBed.createComponent(TestComponent);
    const feedbackComponent = fixtureN.debugElement.componentInstance;
    const feedbackService = fixtureN.debugElement.injector.get(TestfulService);
    fixtureN.detectChanges();
    let subscribedFeedbackDetails: string;
    subscribedFeedbackDetails = feedbackService.addFeedbackDetails;
    expect(subscribedFeedbackDetails).toEqual(feedbackComponent.feedbackResponse);
  })

  it ('should add course request details', () => {
    const fixtureN = TestBed.createComponent(TestComponent);
    const courseRequestComponent = fixtureN.debugElement.componentInstance;
    const courseRequestService = fixtureN.debugElement.injector.get(TestfulService);
    fixtureN.detectChanges();
    let subscribedCourseRequestDetails: string;
    subscribedCourseRequestDetails = courseRequestService.addCourseRequest;
    expect(subscribedCourseRequestDetails).toEqual(courseRequestComponent.requestedCourseResponse);
  })
});
