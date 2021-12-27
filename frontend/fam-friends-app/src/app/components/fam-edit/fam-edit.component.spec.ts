import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamEditComponent } from './fam-edit.component';

describe('FamEditComponent', () => {
  let component: FamEditComponent;
  let fixture: ComponentFixture<FamEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
