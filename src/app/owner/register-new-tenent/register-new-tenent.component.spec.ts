import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewTenentComponent } from './register-new-tenent.component';

describe('RegisterNewTenentComponent', () => {
  let component: RegisterNewTenentComponent;
  let fixture: ComponentFixture<RegisterNewTenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewTenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewTenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
