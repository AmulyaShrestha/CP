import {Injectable} from '@angular/core';
import {User} from '../../../feature/Model/User';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of'

@Injectable({
    providedIn: 'root'
})
export class CurrentUserService {
    currentUser: User = new User();
    isAdmin: boolean;

    constructor() {
    }

    checkAdmin(currentUser: User) {
        if (currentUser.role === 'admin') {
            this.isAdmin = true;
            return true;
        } else {
            this.isAdmin = false;
            return false;
        }
    }

    userRole() {
        return Observable.of(this.isAdmin);
    }

    setCurrentUser(currentUser: User) {
        this.currentUser = currentUser;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}
