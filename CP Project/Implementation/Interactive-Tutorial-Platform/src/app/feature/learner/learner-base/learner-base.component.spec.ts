import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerBaseComponent } from './learner-base.component';

describe('LearnerBaseComponent', () => {
  let component: LearnerBaseComponent;
  let fixture: ComponentFixture<LearnerBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
