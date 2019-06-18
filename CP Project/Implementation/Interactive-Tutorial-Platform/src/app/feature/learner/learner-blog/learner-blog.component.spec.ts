import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerBlogComponent } from './learner-blog.component';

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
});
