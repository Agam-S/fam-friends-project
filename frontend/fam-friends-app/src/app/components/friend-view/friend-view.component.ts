import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { friends, IFriend } from 'src/app/models/friends';
import { DataService } from 'src/app/services/data.service';
import { FriendsService } from 'src/app/services/friends.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-friend-view',
  templateUrl: './friend-view.component.html',
  styleUrls: ['./friend-view.component.css'],
})
export class FriendViewComponent implements OnInit {
  id: string;
  subscription: Subscription;
  friID: friends;
  editFri: IFriend;
  statusString: string;
  constructor(
    private data: DataService,
    private loginService: LoginService,
    private router: Router,
    private friService: FriendsService
  ) {}

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.subscription = this.data.currentMessage.subscribe(
      (id) => (this.id = id)
    );

    if (this.id == 'default message') {
      this.router.navigate(['/friends']);
    }

    this.friService.readByID(this.id).subscribe((res) => {
      this.friID = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  cancel() {
    this.router.navigate(['/friends']);
  }
  goBack() {
    this.router.navigate(['/friends']);
  }
}
