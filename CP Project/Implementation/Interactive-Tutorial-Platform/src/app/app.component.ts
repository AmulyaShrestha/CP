import {Component, ElementRef, Inject, OnInit, Renderer, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import {DOCUMENT} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {NavbarComponent} from './shared/navbar/navbar.component';
import * as firebase from 'firebase';
import {User} from './feature/Model/User';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './feature/authentication/service/auth.service';
import {CurrentUserService} from './shared/global-services/currentUser-service/current-user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    currentUser: User = new User();
    private _router: Subscription;

    constructor(private renderer: Renderer,
                private router: Router, @Inject(DOCUMENT,) private document: any,
                private element: ElementRef,
                public location: Location,
                private firestore: AngularFirestore,
                private authService: AuthService,
                private currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(
            (userData) => {
                if (userData) {
                    console.log('Current user is', userData.uid);
                    let users;
                    this.firestore.collection('user', ref => ref.where('userId', '==', userData.uid))
                        .snapshotChanges().subscribe(actionArray => {
                            users = actionArray.map(currentUser => {
                                this.currentUser = currentUser.payload.doc.data() as User;
                            });
                            const isAdmin = this.currentUserService.checkAdmin(this.currentUser);
                            if (isAdmin) {
                                this.router.navigate(['admin']);
                            } else {
                                this.router.navigate(['learner']);
                            }
                            console.log(isAdmin);
                            console.log('CURRENT USER', this.currentUser, this.currentUser.username);
                        }
                    );
                } else {
                    console.log('NO FREAKING USER !!!');
                    this.currentUser = new User();
                    this.router.navigate(['learner']);
                }
            }
        );

        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listenGlobal('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
}
