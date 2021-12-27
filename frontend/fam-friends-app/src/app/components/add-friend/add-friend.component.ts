import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IFriend } from 'src/app/models/friends';
import { FriendsService } from 'src/app/services/friends.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  postFri: IFriend;
  statusString: string;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('age') ageInput: ElementRef;
  @ViewChild('hobbies') hobbiesInput: ElementRef;
  @ViewChild('favFood') favFoodInput: ElementRef;

  constructor(
    private friendsServices: FriendsService,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
  addFriend(friend: IFriend) {
    let name = this.nameInput.nativeElement.value;
    let age = this.ageInput.nativeElement.value;
    let hobbies = this.hobbiesInput.nativeElement.value;
    let favFood = this.favFoodInput.nativeElement.value;

    if (name === '' || age === '' || hobbies === '' || favFood === '') {
      alert('Please fill all the fields');
    }

    this.postFri = {
      name: name,
      age: Number(age),
      hobbies: hobbies,
      favFood: favFood,
    };

    this.friendsServices.postFriends(this.postFri).subscribe(
      (res: any) => {
        this.statusString = 'Friend Successfully Added!';
      },
      (err: any) => {
        this.statusString = err.error;
      }
    );
  }
}
