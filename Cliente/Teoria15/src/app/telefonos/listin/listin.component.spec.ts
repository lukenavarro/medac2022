import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinComponent } from './listin.component';

describe('ListinComponent', () => {
  let component: ListinComponent;
  let fixture: ComponentFixture<ListinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
