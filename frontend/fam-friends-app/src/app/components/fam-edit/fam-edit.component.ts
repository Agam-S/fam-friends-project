import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';
import { IFamily, family } from '../../models/family';

@Component({
  selector: 'app-fam-edit',
  templateUrl: './fam-edit.component.html',
  styleUrls: ['./fam-edit.component.css'],
})
export class FamEditComponent implements OnInit, OnDestroy {
  id: string;
  subscription: Subscription;
  famID: family;
  editFam: IFamily;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('age') ageInput: ElementRef;
  @ViewChild('hobbies') hobbiesInput: ElementRef;
  @ViewChild('favFood') favFoodInput: ElementRef;
  statusString: string;
  constructor(
    private data: DataService,
    private loginService: LoginService,
    private router: Router,
    private familySer: FamilyService
  ) {}

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.subscription = this.data.currentMessage.subscribe(
      (id) => (this.id = id)
    );
    console.log(this.id);
    if (this.id == 'default message') {
      this.router.navigate(['/family']);
    }

    this.familySer.getByID(this.id).subscribe((res) => {
      this.famID = res;
      console.log(this.famID);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  cancel() {
    this.router.navigate(['/family']);
  }
  editMem() {
    let name = this.nameInput.nativeElement.value;
    let age = this.ageInput.nativeElement.value;
    let hobbies = this.hobbiesInput.nativeElement.value;
    let favFood = this.favFoodInput.nativeElement.value;

    if (name === '' || age === '' || hobbies === '' || favFood === '') {
      alert('Please fill all the fields');
      this.router.navigate(['/family']);
    }

    this.editFam = {
      name: name,
      age: Number(age),
      hobbies: hobbies,
      favFood: favFood,
    };

    this.familySer.putbyID(this.editFam, this.id).subscribe(
      (res: any) => {
        this.statusString = 'Member Successfully Edited!';
        console.log(this.id);
      },
      (err: any) => {
        this.statusString = err.error;
      }
    );
  }
}
