import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IFamily } from 'src/app/models/family';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-fam',
  templateUrl: './add-fam.component.html',
  styleUrls: ['./add-fam.component.css'],
})
export class AddFamComponent implements OnInit {
  postFam: IFamily;
  statusString: string;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('age') ageInput: ElementRef;
  @ViewChild('hobbies') hobbiesInput: ElementRef;
  @ViewChild('favFood') favFoodInput: ElementRef;

  constructor(
    private familyService: FamilyService,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
  addFam(postFam: IFamily) {
    let name = this.nameInput.nativeElement.value;
    let age = this.ageInput.nativeElement.value;
    let hobbies = this.hobbiesInput.nativeElement.value;
    let favFood = this.favFoodInput.nativeElement.value;

    if (name === '' || age === '' || hobbies === '' || favFood === '') {
      alert('Please fill all the fields');
    }

    this.postFam = {
      name: name,
      age: Number(age),
      hobbies: hobbies,
      favFood: favFood,
    };

    this.familyService.postFamily(this.postFam).subscribe(
      (res: any) => {
        this.statusString = 'Member Successfully Added!';
      },
      (err: any) => {
        this.statusString = err.error;
      }
    );
  }
  goBack() {
    this.router.navigate(['/family']);
  }
}
