import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavComponent } from './components/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { FriendsComponent } from './components/friends/friends.component';
import { FamilyComponent } from './components/family/family.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { AddFamComponent } from './components/add-fam/add-fam.component';
import { FamEditComponent } from './components/fam-edit/fam-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    DashComponent,
    Nav2Component,
    FriendsComponent,
    FamilyComponent,
    AddFriendComponent,
    AddFamComponent,
    FamEditComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
