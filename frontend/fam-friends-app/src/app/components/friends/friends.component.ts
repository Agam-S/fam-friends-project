import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';
import { LoginService } from 'src/app/services/login.service';
import { IFriend, friends } from 'src/app/models/friends';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  friendsList: any;
  idString: string;
  id: string;
  subscription: Subscription;
  constructor(
    private friendsServices: FriendsService,
    private router: Router,
    private login: LoginService,
    private data: DataService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else
      this.friendsServices.getFriends().subscribe((friends) => {
        this.friendsList = friends;
        console.log(friends);
      });
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.id = message)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  deleteFri(_id: string) {
    if (confirm('Are you sure you want to delete this friend??!')) {
      this.friendsServices.deleteFriend(_id).subscribe((res: any) => {
        alert('Friend Deleted!');
        let cUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([cUrl]);
          });
      });
    }
  }
  addFriend() {
    this.router.navigate(['/friends/add']);
  }
  editFri(_id: string) {
    this.idString = _id;
    console.log(this.idString);
    this.data.changeMessage(this.idString);
    this.router.navigate(['/friends/edit']);
  }
}
