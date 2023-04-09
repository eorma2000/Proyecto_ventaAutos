/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cliente.serviceService } from './cliente.service.service';

describe('Service: Cliente.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cliente.serviceService]
    });
  });

  it('should ...', inject([Cliente.serviceService], (service: Cliente.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
