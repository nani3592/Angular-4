import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { SecondCompComponent } from './components/second-comp/second-comp.component';
import { AppRouteModule } from './app.routing';
import { FlexLayoutsComponent } from './components/flex-layouts/flex-layouts.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FirebaceExComponent } from './components/firebace-ex/firebace-ex.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './components/login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBnQQj3JXoUkOlTHCefVRPD8OgCzRgPlzE",
  authDomain: "my-project-1494598869132.firebaseapp.com",
  databaseURL: "https://my-project-1494598869132.firebaseio.com",
  projectId: "my-project-1494598869132",
  storageBucket: "",
  messagingSenderId: "270510338752"
};


@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    FlexLayoutsComponent,
    SidenavComponent,
    UserDetailsComponent,
    UsersComponent,
    ProfileComponent,
    FirebaceExComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRouteModule, FlexLayoutModule,
    MatDialogModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  entryComponents: [SecondCompComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
