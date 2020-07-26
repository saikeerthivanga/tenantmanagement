import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuepaymentanddateComponent } from './duepaymentanddate.component';

describe('DuepaymentanddateComponent', () => {
  let component: DuepaymentanddateComponent;
  let fixture: ComponentFixture<DuepaymentanddateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuepaymentanddateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuepaymentanddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
