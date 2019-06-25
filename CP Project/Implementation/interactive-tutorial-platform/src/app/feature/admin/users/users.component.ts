import {Component, OnInit} from '@angular/core';
import {User} from '../../Model/User';
import {UserService} from './service/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    userList: Array<User> = new Array<User>();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getAllUser();
    }

    getAllUser() {
        this.userService.getAllUser().subscribe(response => {
            this.userList = response.map(singleUser => {
                return {
                    id: singleUser.payload.doc.id,
                    ...singleUser.payload.doc.data()
                } as User;
            })
        });
    }

    onDeleteUser(userId) {
        if (confirm('Are you sure you want to delete this User?')) {
            this.userService.deleteUser(userId)
                .then(
                    () => {
                        alert('SUCCESS !!!');
                    }
                )
                .catch(
                    error => alert(`ERROR${error}`)
                )
        }
    }

}
