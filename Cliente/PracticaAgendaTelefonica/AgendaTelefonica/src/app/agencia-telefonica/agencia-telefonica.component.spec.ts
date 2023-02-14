import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaTelefonicaComponent } from './agencia-telefonica.component';

describe('AgenciaTelefonicaComponent', () => {
  let component: AgenciaTelefonicaComponent;
  let fixture: ComponentFixture<AgenciaTelefonicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciaTelefonicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciaTelefonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
