import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToysSeparateComponent } from './my-toys-separate.component';

describe('MyToysSeparateComponent', () => {
  let component: MyToysSeparateComponent;
  let fixture: ComponentFixture<MyToysSeparateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyToysSeparateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyToysSeparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
