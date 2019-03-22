import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;



  constructor(public afs: AngularFirestore) {
    this.usersCollection = afs.collection('users',
    ref => ref.orderBy('name', 'asc'));

   }


  getUsers(): Observable<User[]> {
      this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
        const data = action.payload.doc.data() as User;
        const id = action.payload.doc.id;
        return {id, ...data};
      });
    }));

    return this.users;

  }
  // add user
  newUser(user: User) {
    this.usersCollection.add(user);
  }

  // user Details
  getUser(id: string): Observable<User> {


    this.userDoc = this.afs.doc<User>(`users/${id}`);
    this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as User;
        data.id = action.payload.id;
        return {id, ...data};
      }
    }));

    return this.user;
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }
  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();

  }

}
