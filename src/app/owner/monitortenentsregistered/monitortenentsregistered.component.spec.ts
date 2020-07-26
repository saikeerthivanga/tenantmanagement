import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitortenentsregisteredComponent } from './monitortenentsregistered.component';

describe('MonitortenentsregisteredComponent', () => {
  let component: MonitortenentsregisteredComponent;
  let fixture: ComponentFixture<MonitortenentsregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitortenentsregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitortenentsregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
