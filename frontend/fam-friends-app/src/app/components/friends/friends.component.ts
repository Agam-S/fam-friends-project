import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  friendsList: any;
  constructor(
    private friendsServices: FriendsService,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.friendsServices.getFriends().subscribe((data) => {
      console.log(data);
    });
  }
}
