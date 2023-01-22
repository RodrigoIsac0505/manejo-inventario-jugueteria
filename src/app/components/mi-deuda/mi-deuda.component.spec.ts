import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDeudaComponent } from './mi-deuda.component';

describe('MiDeudaComponent', () => {
  let component: MiDeudaComponent;
  let fixture: ComponentFixture<MiDeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiDeudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
