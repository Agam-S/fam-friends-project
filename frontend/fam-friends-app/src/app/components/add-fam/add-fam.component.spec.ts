import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamComponent } from './add-fam.component';

describe('AddFamComponent', () => {
  let component: AddFamComponent;
  let fixture: ComponentFixture<AddFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
