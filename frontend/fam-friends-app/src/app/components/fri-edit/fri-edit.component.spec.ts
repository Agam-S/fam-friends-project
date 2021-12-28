import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriEditComponent } from './fri-edit.component';

describe('FriEditComponent', () => {
  let component: FriEditComponent;
  let fixture: ComponentFixture<FriEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
