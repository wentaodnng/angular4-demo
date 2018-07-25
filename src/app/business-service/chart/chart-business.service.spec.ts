import {inject, TestBed} from '@angular/core/testing';

import {ChartBusinessService} from './chart-business.service';

describe('ChartBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartBusinessService]
    });
  });

  it('should be created', inject([ChartBusinessService], (service: ChartBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
