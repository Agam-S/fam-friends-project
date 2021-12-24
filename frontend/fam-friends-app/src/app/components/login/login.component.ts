import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: ILogin;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('password') passwordInput: ElementRef;
  errorString: string;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/dash']);
    }
  }

  login() {
    let email = this.emailInput.nativeElement.value;
    let password = this.passwordInput.nativeElement.value;
    this.user = {
      email: email,
      password: password,
    };
    this.loginService.Login(this.user).subscribe(
      (res: any) => {
        this.loginService.setToken(res['token']);
        this.router.navigate(['/dash']);
      },
      (err) => {
        this.errorString = err.error.message;
      }
    );
  }
}
