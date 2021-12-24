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

    this.user = {
      name: name,
      email: email,
      password: password,
    };
    this.signUpService
      .PostUser(this.user)
      .subscribe((res) => console.log('success', res));
    this.router.navigate(['/login']);
  }
}
