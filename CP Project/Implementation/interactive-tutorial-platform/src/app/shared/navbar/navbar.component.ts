import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {User} from '../../feature/Model/User';
import {AuthService} from '../../feature/authentication/service/auth.service';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {CurrentUserService} from '../global-services/currentUser-service/current-user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    user: User = new User();
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location,
                private element: ElementRef,
                private authService: AuthService,
                private firestore: AngularFirestore,
                private currentUserService: CurrentUserService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(
            (userData) => {
                if (userData) {
                    this.firestore.collection('user', ref => ref.where('userId', '==', userData.uid))
                        .snapshotChanges().subscribe(actionArray => {
                            const users = actionArray.map( currentUser => {
                                this.user = currentUser.payload.doc.data() as User;
                                this.currentUserService.setCurrentUser(this.user);
                            });
                    });
                } else {
                    this.user = new User();
                }
            }
        );

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    onLogOut() {
        this.authService.signOut();
        this.user = new User();
    }
}
