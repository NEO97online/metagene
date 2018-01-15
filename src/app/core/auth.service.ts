import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
   }

   private handleError(error) {
    console.log(error);
  }

  // Create a new user
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    console.log(password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        // this.notify.update('Welcome to Firestarter!!!', 'success')
        this.router.navigate(['/dashboard']);
        // return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  // Update user data
  updateUser(user: User, data: Partial<User>) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }

  // Saves user data to firebase after sign up
  private setUserDoc(user) {
    const data: User = {
      uid: user.uid,
      email: user.email
    }
    return this.afs.doc<User>(`users/${user.uid}`).set(data);
  }

}
