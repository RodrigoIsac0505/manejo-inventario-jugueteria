import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToysComponent } from './delete-toys.component';

describe('DeleteToysComponent', () => {
  let component: DeleteToysComponent;
  let fixture: ComponentFixture<DeleteToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
