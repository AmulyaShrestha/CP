import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerBlogComponent } from './learner-blog.component';
import {LearnerBlogService} from './service/learner-blog.service';

describe('LearnerBlogComponent', () => {
  let component: LearnerBlogComponent;
  let fixture: ComponentFixture<LearnerBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it ('should retrieve blog posts from admin', () => {
    const fixtureN = TestBed.createComponent(LearnerBlogComponent);
    const learnerBlogComponent = fixtureN.debugElement.componentInstance;
    const learnerBlogService = fixtureN.debugElement.injector.get(LearnerBlogService);
    // retrieve all blog posts
    learnerBlogService.getBlogList();
    fixtureN.detectChanges();
    expect(learnerBlogService.blogList).toEqual(learnerBlogComponent.blogList);
  })*/
});
