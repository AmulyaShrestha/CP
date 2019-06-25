import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {CurrentUserService} from '../currentUser-service/current-user.service';

@Injectable({
    providedIn: 'root'
})
export class AdminRouteGuard implements CanLoad {

    constructor(private currentUserService: CurrentUserService,
                private router: Router) {
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.currentUserService.userRole();
    }
}
