import { TestBed } from '@angular/core/testing';

import { PassengerListService } from './passenger-list.service';

describe('PassengerListService', () => {
  let service: PassengerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
