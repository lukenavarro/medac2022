import { TestBed } from '@angular/core/testing';

import { TelefonosServiceService } from './telefonos-service.service';

describe('TelefonosServiceService', () => {
  let service: TelefonosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefonosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
