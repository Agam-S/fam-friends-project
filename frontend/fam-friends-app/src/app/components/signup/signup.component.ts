import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISignup } from 'src/app/models/signup';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorString: string;
  user: ISignup;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('password') passwordInput: ElementRef;

  constructor(private signUpService: RegisterService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    let name = this.nameInput.nativeElement.value;
    let email = this.emailInput.nativeElement.value;
    let password = this.passwordInput.nativeElement.value;

    if (name === '' || email === '' || password === '') {
      alert('Please fill out all fields');
    }

    this.user = {
      name: name,
      email: email,
      password: password,
    };
    this.signUpService.PostUser(this.user).subscribe(
      (res: any) => {
        this.errorString = 'Email Successfully Registered';
      },
      (err: any) => {
        this.errorString = err.error;
      }
    );
  }
}
