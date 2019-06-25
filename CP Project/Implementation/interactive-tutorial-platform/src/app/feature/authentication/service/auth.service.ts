import {Injectable} from '@angular/core';
import {User} from '../../Model/User';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;
    currentUser: User = new User();

    constructor(private firestore: AngularFirestore) {
    }

    signUpUser(newUser: User) {
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(
                (data) => {
                    if (data) {
                        newUser.userId = data.user.uid;
                        newUser.role = 'learner';
                        const user = JSON.parse(JSON.stringify(newUser));
                        this.firestore.collection('user').add(user);
                    }
                }
            )
    }

    logInUser(email: string, password: string) {
        this.currentUser = new User();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(
                        (data) => {
                            if (data) {
                                firebase.auth().currentUser.getIdToken()
                                    .then(
                                        (token) => this.token = token
                                    );
                                this.firestore.collection('user', ref => ref.where('userId', '==', data.user.uid))
                                    .snapshotChanges().subscribe(actionArray => {
                                        const users = actionArray.map(currentUser => {
                                            this.currentUser = currentUser.payload.doc.data() as User;
                                            /*return {
                                                id: currentUser.payload.doc.id,
                                                ...currentUser.payload.doc.data()
                                            } as User;*/
                                        });
                                    }
                                );
                            }
                        }
                    )
                    .catch(
                        error => console.log('error', error)
                    );
            });
    }

    signOut() {
        firebase.auth().signOut();
    }
}
