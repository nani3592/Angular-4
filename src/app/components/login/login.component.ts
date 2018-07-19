// import { AuthProviders } from 'angularfire2/fi';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }

  login(email, password) {
    // this.af.auth.createUserWithEmailAndPassword(email, password.phoneNumber).then(value => {
    //   console.log('Success!', value);
    // })
    // .catch(err => {
    //   console.log('Something went wrong:',err.message);
    // });  

    this.af.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(res =>{
      console.log('rrrrrr---------->', res)
    })
  }

}
