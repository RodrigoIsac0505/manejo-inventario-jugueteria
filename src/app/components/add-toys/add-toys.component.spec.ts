import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToysComponent } from './add-toys.component';

describe('AddToysComponent', () => {
  let component: AddToysComponent;
  let fixture: ComponentFixture<AddToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
