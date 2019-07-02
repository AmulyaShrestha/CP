import { TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {CurrentUserService} from '../global-services/currentUser-service/current-user.service';

describe('NavbarComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navBarComponent = fixture.debugElement.componentInstance;
    expect(navBarComponent).toBeTruthy();
  });

  it ('should have current user if logged in from the service', () => {
    const fixtureN = TestBed.createComponent(NavbarComponent);
    const navBarComponent = fixtureN.debugElement.componentInstance;
    const currentUserService = fixtureN.debugElement.injector.get(CurrentUserService);
    fixtureN.detectChanges();
    expect(currentUserService.currentUser).toEqual(navBarComponent.currentUser);
  })
});
