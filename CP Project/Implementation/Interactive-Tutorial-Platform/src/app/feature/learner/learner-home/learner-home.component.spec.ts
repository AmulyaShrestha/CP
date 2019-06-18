import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerHomeComponent } from './learner-home.component';

describe('LearnerHomeComponent', () => {
  let component: LearnerHomeComponent;
  let fixture: ComponentFixture<LearnerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
