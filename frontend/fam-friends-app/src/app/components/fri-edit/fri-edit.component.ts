import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { friends, IFriend } from 'src/app/models/friends';
import { DataService } from 'src/app/services/data.service';
import { FriendsService } from 'src/app/services/friends.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fri-edit',
  templateUrl: './fri-edit.component.html',
  styleUrls: ['./fri-edit.component.css'],
})
export class FriEditComponent implements OnInit {
  id: string;
  subscription: Subscription;
  friID: friends;
  editFri: IFriend;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('age') ageInput: ElementRef;
  @ViewChild('hobbies') hobbiesInput: ElementRef;
  @ViewChild('favFood') favFoodInput: ElementRef;
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

    this.friService.getByID(this.id).subscribe((res) => {
      this.friID = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  cancel() {
    this.router.navigate(['/friends']);
  }
  editFriend() {
    let name = this.nameInput.nativeElement.value;
    let age = this.ageInput.nativeElement.value;
    let hobbies = this.hobbiesInput.nativeElement.value;
    let favFood = this.favFoodInput.nativeElement.value;

    if (name === '' || age === '' || hobbies === '' || favFood === '') {
      alert('Please fill all the fields');
      this.router.navigate(['/friends']);
    }

    this.editFri = {
      name: name,
      age: Number(age),
      hobbies: hobbies,
      favFood: favFood,
    };

    this.friService.putbyID(this.editFri, this.id).subscribe(
      (res: any) => {
        this.statusString = 'Friend Successfully Edited!';
      },
      (err: any) => {
        this.statusString = err.error;
      }
    );
  }
}
