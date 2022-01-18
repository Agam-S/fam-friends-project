import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFamComponent } from './components/add-fam/add-fam.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { DashComponent } from './components/dash/dash.component';
import { FamEditComponent } from './components/fam-edit/fam-edit.component';
import { FamViewComponent } from './components/fam-view/fam-view.component';
import { FamilyComponent } from './components/family/family.component';
import { FriEditComponent } from './components/fri-edit/fri-edit.component';
import { FriendViewComponent } from './components/friend-view/friend-view.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'friends/add', component: AddFriendComponent },
  { path: 'family/add', component: AddFamComponent },
  { path: 'family/edit', component: FamEditComponent },
  { path: 'friends/edit', component: FriEditComponent },
  { path: 'friends/view', component: FriendViewComponent },
  { path: 'family/view', component: FamViewComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
