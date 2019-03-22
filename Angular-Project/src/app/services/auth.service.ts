import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afa: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afa.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      error => reject(error));
    });
  }

  getAuth() {
    return this.afa.authState.pipe(map(auth => auth));
  }

  logout() {
    this.afa.auth.signOut();
  }

}
