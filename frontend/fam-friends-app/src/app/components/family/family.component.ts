import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
})
export class FamilyComponent implements OnInit {
  familyList: any;
  constructor(
    private familyService: FamilyService,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else
      this.familyService.getFamily().subscribe((family) => {
        this.familyList = family;
        console.log(family);
      });
  }
  addMem() {
    this.router.navigate(['/family/add']);
  }
}
