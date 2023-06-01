import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijstjeFormComponent } from './lijstje-form.component';

describe('LijstjeFormComponent', () => {
  let component: LijstjeFormComponent;
  let fixture: ComponentFixture<LijstjeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LijstjeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijstjeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
