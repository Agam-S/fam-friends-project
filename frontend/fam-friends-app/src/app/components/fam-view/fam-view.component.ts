import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { family, IFamily } from 'src/app/models/family';
import { DataService } from 'src/app/services/data.service';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fam-view',
  templateUrl: './fam-view.component.html',
  styleUrls: ['./fam-view.component.css'],
})
export class FamViewComponent implements OnInit {
  id: string;
  subscription: Subscription;
  famID: family;
  editFri: IFamily;
  statusString: string;
  constructor(
    private data: DataService,
    private loginService: LoginService,
    private router: Router,
    private famService: FamilyService
  ) {}

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.subscription = this.data.currentMessage.subscribe(
      (id) => (this.id = id)
    );

    if (this.id == 'default message') {
      this.router.navigate(['/family']);
    }

    this.famService.readByID(this.id).subscribe((res) => {
      this.famID = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  cancel() {
    this.router.navigate(['/family']);
  }
  goBack() {
    this.router.navigate(['/family']);
  }
}
