import { TestBed } from '@angular/core/testing';

import { RegisternewtenantService } from './registernewtenant.service';

describe('RegisternewtenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisternewtenantService = TestBed.get(RegisternewtenantService);
    expect(service).toBeTruthy();
  });
});
