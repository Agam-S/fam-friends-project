import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fam-edit',
  templateUrl: './fam-edit.component.html',
  styleUrls: ['./fam-edit.component.css'],
})
export class FamEditComponent implements OnInit, OnDestroy {
  id: string;
  subscription: Subscription;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (id) => (this.id = id)
    );
    console.log(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
