import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss'],
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
  openNav() {
    // get element by id "myNav" then set its style.height to 100%
    document.getElementById('myNav').style.height = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }
}
