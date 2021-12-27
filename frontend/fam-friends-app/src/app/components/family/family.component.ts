import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
})
export class FamilyComponent implements OnInit, OnDestroy {
  idString: string;
  familyList: any;
  id: string;
  subscription: Subscription;
  constructor(
    private familyService: FamilyService,
    private router: Router,
    private login: LoginService,
    private data: DataService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else
      this.familyService.getFamily().subscribe((family) => {
        this.familyList = family;
        console.log(family);
      });
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.id = message)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
  deleteFam(_id: string) {
    if (confirm('Are you sure you want to delete this member??!')) {
      this.familyService.deleteFam(_id).subscribe((res: any) => {
        alert('Member Deleted!');
        // this.router.navigate(['/family']).then(() => {
        //   window.location.reload();
        // });
        let cUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([cUrl]);
          });
      });
    }
  }
  addMem() {
    this.router.navigate(['/family/add']);
  }
  editFam(_id: string) {
    this.idString = _id;
    console.log(this.idString);
    this.data.changeMessage(this.idString);
    this.router.navigate(['/family/edit']);
  }
}
