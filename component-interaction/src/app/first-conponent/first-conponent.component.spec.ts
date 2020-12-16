import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstConponentComponent } from './first-conponent.component';

describe('FirstConponentComponent', () => {
  let component: FirstConponentComponent;
  let fixture: ComponentFixture<FirstConponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstConponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
