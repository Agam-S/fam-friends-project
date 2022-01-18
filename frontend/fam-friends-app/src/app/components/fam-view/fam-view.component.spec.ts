import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamViewComponent } from './fam-view.component';

describe('FamViewComponent', () => {
  let component: FamViewComponent;
  let fixture: ComponentFixture<FamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
