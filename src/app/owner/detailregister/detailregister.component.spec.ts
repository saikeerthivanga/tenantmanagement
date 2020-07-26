import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailregisterComponent } from './detailregister.component';

describe('DetailregisterComponent', () => {
  let component: DetailregisterComponent;
  let fixture: ComponentFixture<DetailregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
