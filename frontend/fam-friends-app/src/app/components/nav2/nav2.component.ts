import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css'],
})
export class Nav2Component implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  logout() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.deleteToken();
      this.router.navigate(['/login']);
    }
  }
}
