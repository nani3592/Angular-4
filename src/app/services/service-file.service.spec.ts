import { TestBed, inject } from '@angular/core/testing';

import { ServiceFileService } from './service-file.service';

describe('ServiceFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceFileService]
    });
  });

  it('should be created', inject([ServiceFileService], (service: ServiceFileService) => {
    expect(service).toBeTruthy();
  }));
});
