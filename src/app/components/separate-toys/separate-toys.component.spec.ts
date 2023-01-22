import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateToysComponent } from './separate-toys.component';

describe('SeparateToysComponent', () => {
  let component: SeparateToysComponent;
  let fixture: ComponentFixture<SeparateToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparateToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
