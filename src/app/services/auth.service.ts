import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
// import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { User } from '../model/user/User';

// import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { UserRegister } from '../model/user/UserRegister';
import { Router } from '@angular/router';
import { DeliveryManService } from './deliveryman.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router, private deliveryManService: DeliveryManService) { }

  // register(userRegister: UserRegister): Observable<void> {
  //   return new Observable<void>(observer => {
  //     setTimeout(() => {
  //       if (userRegister.email == "error@email.com") {
  //         observer.error({ message: "email already registered" });
  //       } else {
  //         observer.next();
  //       }
  //       observer.complete();
  //     }, 3000)
  //   })
  // }
  register(userToSignIn): Observable<User> {
    this.deliveryManService.isActive(userToSignIn.email).subscribe((isActive) => {
      if (isActive == "true")
        return new Observable<User>(observer => {
          this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
            this.auth.createUserWithEmailAndPassword(userToSignIn.email, userToSignIn.password)
              .then((firebaseUser: firebase.default.auth.UserCredential) => {
                observer.next({ email: userToSignIn.email, id: firebaseUser.user.uid });
                observer.complete();
                this.router.navigate(['/home'])
              }).catch(error => {
                observer.error(error);
                observer.complete();
              })
          })
        })
    })
    this.router.navigate(['/login']);
    return null;
  }

  //   const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });


  recoverEmailPassword(email: string): Observable<void> {
    return new Observable<void>(observer => {
      this.auth.sendPasswordResetEmail(email).then(() => {
        observer.next();
        observer.complete();
      }).catch(error => {
        observer.error(error);
        observer.complete();
      })
    })
  }

  login(email: string, password: string): Observable<User> {
    return new Observable<User>(observer => {
      this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
        this.auth.signInWithEmailAndPassword(email, password)
          .then((firebaseUser: firebase.default.auth.UserCredential) => {
            observer.next({ email, id: firebaseUser.user.uid });
            observer.complete();
          }).catch(error => {
            observer.error(error);
            observer.complete();
          })
      })
    })
  }

}
