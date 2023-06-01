import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijstjeListComponent } from './lijstje-list.component';

describe('LijstjeListComponent', () => {
  let component: LijstjeListComponent;
  let fixture: ComponentFixture<LijstjeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LijstjeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijstjeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
