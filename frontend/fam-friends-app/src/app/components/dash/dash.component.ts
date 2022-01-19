import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/dash.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  user: any;
  constructor(
    private dashService: DashService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }

    this.dashService.GetDash().subscribe((data) => {
      this.user = data;
    });
  }
}
