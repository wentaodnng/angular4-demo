import {inject, TestBed} from '@angular/core/testing';

import {UserBusinessService} from './user-business.service';

describe('ChartBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBusinessService]
    });
  });

  it('should be created', inject([UserBusinessService], (service: UserBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
