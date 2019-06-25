import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerManualComponent } from './learner-manual.component';

describe('LearnerManualComponent', () => {
  let component: LearnerManualComponent;
  let fixture: ComponentFixture<LearnerManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
