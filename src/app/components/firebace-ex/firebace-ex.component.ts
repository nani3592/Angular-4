import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage'
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable, ReplaySubject } from 'rxjs';
// import * as firebase from 'firebase/app';
// import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'






import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-firebace-ex',
  templateUrl: './firebace-ex.component.html',
  styleUrls: ['./firebace-ex.component.css']
})
export class FirebaceExComponent implements OnInit {

  user;
  dataSet: FirebaseObjectObservable<any>;
  msgVal: string = '';
  arr = [{ name: 'java' },
  { name: 'java' }, { name: 'java' }, { name: 'java' }, { name: 'java' }, { name: 'java' }, { name: 'java' }]


  constructor(public db: AngularFireDatabase) {
    //  db.list('/Notes').valueChanges().subscribe(data => {
    //     console.log('-------->', data)
    //   })
    this.arr.push({ name: 'Nani' });
    db.object('item').set(this.arr);

    // db.object('item').set({ url: 'jsa.com' });

    db.object('item/3').update({name : 'sssss'});
    db.object('item/5').remove();
    // db.object('item').update('key', { url: 'javasampleapp.com' });

    // this.dataSet = db.object('item').valueChanges();
  }

  ngOnInit() {
    //  this.dataSet.push({'name':'Nani','salry':15000,'age':24});
  }

}























































 // //   login() {
  // //     this.afAuth.auth.signInAnonymously();
  // // }

  // // logout() {
  // //     this.afAuth.auth.signOut();
  // // }

  // Send(desc: string) {
  //   this.items.push({ 'message': desc });
  //   this.msgVal = '';
  // }
